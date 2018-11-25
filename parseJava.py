# parser.py
# November 23, 2018
# CPSC 410 Group Project
#
# Extracts data from a Java project to create a JSON object which can be used to
# create a circle packing diagram. The data includes classes, class inheritance,
# functions, fields, etc.

import os, javalang, json

input_dir = os.path.expanduser("/Users/adilimtiaz/Downloads/tinyVisitorStarter")
output_dir = os.path.expanduser("/Users/adilimtiaz/PycharmProjects/CS410")
output_file_name = "output.json"

file_list = []
class_list = []
class_data_list = []

# object to store the required data for each class
class ClassData:
    def __init__(self, name, type, part_of, implemented_by, extended_by, functions, fields):
        self.name = name
        self.type = "class" # default type is class
        self.part_of = []
        self.implemented_by = []
        self.extended_by = []
        self.functions = []
        self.fields = []
        self.number_of_lines = 0

# object to store the required data for each function
class FunctionData:
    def __init__(self, name, return_type, methodLines, methodModifiers, parameters):
        self.name = name
        self.return_type = return_type
        self.methodLines = methodLines
        self.methodModifiers = []
        self.parameters = []

def jsonDefault(object):
    return object.__dict__

# get the file paths of each Java file in the program
for path, subdirs, files in os.walk(input_dir):
    for name in files:
        if name.endswith(".java"):
            file_list.append(os.path.join(path, name))
            class_list.append(name[:-5])

# create a class_data object for each class
for item in class_list:
    c = ClassData(item, None, None, None, None, None, None)
    class_data_list.append(c)

# parse the contents of each file
for file in file_list:

    # store the lines of the Java file, removing all comments
    file_lines = []
    file_text = ""
    with open(file, 'r') as f:
        text = f.readlines()
        mode = 1 # 1 = write, 0 = do not write
        for line in text:
            file_text += line

            if "/**" in line:
                mode = 0

            if mode == 1:
                if "//" in line:
                    line = line[:line.index("//")]
                file_lines.append(str(line))

            if "*/" in line:
                mode = 1
    f.close()

    # find first line with the keyword "class" in it
    class_found = False
    i = 0
    line_number = 0 # stores which line the keyword "class" is on
    while class_found == False and i < len(file_lines):
        if ("class" in file_lines[i]) or ("interface" in file_lines[i]):
            line_number = i
            class_found = True
        i += 1

    # determine the relationships of the classes in the project
    try:
        current_class_name = ""
        line_tokens = file_lines[line_number].split()
        for i in range(len(line_tokens)):
            # get data of current regular class
            if line_tokens[i] == "class":
                current_class_name = line_tokens[i + 1]

                # if the class is an abstract class, change the type in the class_data object
                if line_tokens[i - 1] == "abstract":
                    for class_data in class_data_list:
                        if class_data.name == current_class_name:
                            class_data.type = "abstract"

            # get data of abstract class
            if line_tokens[i] == "interface":
                current_class_name = line_tokens[i + 1]

                for class_data in class_data_list:
                    if class_data.name == current_class_name:
                        class_data.type = "interface"

            # if class extends another class, update both class_data objects
            if line_tokens[i] == "extends":
                extends_class = line_tokens[i + 1]

                if "{" in extends_class:
                    extends_class = extends_class[:extends_class.index("{")]

                if "<" in extends_class:
                    extends_class = extends_class[:extends_class.index("<")]

                found_extends_class = False
                for class_data in class_data_list:
                    if class_data.name == extends_class:
                        class_data.extended_by.append(current_class_name)
                        found_extends_class = True

                if found_extends_class == False:
                    c = ClassData(extends_class, None, None, None, None, None, None)
                    c.extended_by.append(current_class_name)
                    class_data_list.append(c)

                for class_data in class_data_list:
                    if class_data.name == current_class_name:
                        class_data.part_of.append(extends_class)

            # if class implements another class, update both class_data objects
            if line_tokens[i] == "implements":
                j = 1
                implements_string = ""
                while (i + j < len(line_tokens)):
                    implements_string += line_tokens[i + j]
                    j += 1

                if "{" in implements_string:
                    implements_string = implements_string[:implements_string.index("{")]

                implements_classes = implements_string.split(",")

                for k in implements_classes:
                    implements_class = k

                    if "<" in implements_class:
                        implements_class = implements_class[:implements_class.index("<")]

                    found_implements_class = False
                    for class_data in class_data_list:
                        if class_data.name == implements_class:
                            class_data.implemented_by.append(current_class_name)
                            found_implements_class = True

                    if found_implements_class == False:
                        c = ClassData(implements_class, None, None, None, None, None, None)
                        c.implemented_by.append(current_class_name)
                        class_data_list.append(c)

                    for class_data in class_data_list:
                        if class_data.name == current_class_name:
                            class_data.part_of.append(implements_class)

        java_tree = javalang.parse.parse(file_text)

        # find the functions in the project
        for method in java_tree.children[2][0].methods:
            m = FunctionData(method.name, method.return_type, None, None, None)

            for modifier in method.modifiers:
                m.methodModifiers.append(modifier)

            for parameter in method.parameters:
                m.parameters.append(str(parameter.type.name) + " " + str(parameter.name))

            if method.body is not None:
                m.methodLines = len(method.body)

            current_class_name = str(java_tree.children[2][0].name)
            for class_data in class_data_list:
                if class_data.name == current_class_name:
                    class_data.functions.append(m)

        # find the fields in the project
        for field in java_tree.children[2][0].fields:
            field_string = str(field.type.name) + " " + str(field.declarators[0].name)

            current_class_name = str(java_tree.children[2][0].name)
            for class_data in class_data_list:
                if class_data.name == current_class_name:
                    class_data.fields.append(field_string)

        # get the number of lines in the file
        for class_data in class_data_list:
            if class_data.name == current_class_name:
                class_data.number_of_lines = len(file_lines)
    except:
        print "Unusual format in " + file

# output contents to JSON
jsonFunctionArray = []
jsonClassArray = []
jsonFixedClassArray = []
for c in class_data_list:
    for z in c.functions:
        jsonFunction = json.dumps(z, default=jsonDefault)
        jsonFunctionArray.append(jsonFunction)
    c.functions = jsonFunctionArray

    jsonClass = json.dumps(c, default=jsonDefault)
    jsonClassArray.append(jsonClass)


for ClassString in jsonClassArray:
    jsonString = str(ClassString).replace("\\", "").replace('"{', '{').replace('}"', '}')
    jsonFixedClassArray.append(jsonString)

dictionary = {"classes": jsonFixedClassArray}
penultimateJson = json.dumps(dictionary)
ultimateJson = str(penultimateJson).replace("\\", "").replace('"{', '{').replace('}"', '}')
niceLookingJson = ultimateJson.replace(",", ",\n")

# write the string to file
output_file = open(os.path.join(output_dir, output_file_name), "a+")
output_file.write(niceLookingJson)
output_file.close()
