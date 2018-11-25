import re
program=[
"new x",
"set x 3",
"new y",
"set y get x",
"print get x",
"print get y"
]


varsmap={}


def getnode(num,name):
	return "get"+str(num)+name


def setnode(num,name):
	return "set"+str(num)+name


def edge(src,to):
	print str(src)+"->"+str(to)


print "Digraph G { rankdir=BT node[shape=box,fontname=ariel]"
for num,line in enumerate(program):
	tokens=re.split(" ",line)
	if tokens[0]=="new":
		continue

	if tokens[0]=="set":
		varname = tokens[1]
		setname=setnode(num,varname)
		if varname not in varsmap:
			varsmap[varname]=num

		if tokens[2]=="get":
			usename=getnode(num,tokens[3])
			edge(setname,usename)
			lastdef=setnode(varsmap[tokens[3]],tokens[3])
			edge(usename,lastdef)

	if tokens[0]=="print":
		if tokens[1]=="get":
			usename=getnode(num,tokens[2])
			lastdef=setnode(varsmap[tokens[2]],tokens[2])
			edge(usename,lastdef)

print "}"