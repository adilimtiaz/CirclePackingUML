
const output = `{    
    "name" : "test" ,
    "classes": [
      {
        "part_of": [],
        "name": "Node",
        "fields": [
          "Tokenizer tokenizer",
          "PrintWriter writer",
          "LinkedList scope"
        ],
        "functions": [
          {
            "methodModifiers": [
              "abstract",
              "public"
            ],
            "return_type": null,
            "methodLines": null,
            "name": "parse",
            "parameters": []
          },
          {
            "methodModifiers": [
              "abstract",
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": null,
            "name": "evaluate",
            "parameters": []
          },
          {
            "methodModifiers": [
              "static",
              "public"
            ],
            "return_type": null,
            "methodLines": 2,
            "name": "enterScope",
            "parameters": [
              "String s"
            ]
          },
          {
            "methodModifiers": [
              "abstract",
              "public"
            ],
            "return_type": null,
            "methodLines": null,
            "name": "astDrawer",
            "parameters": []
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 2,
            "name": "startGraph",
            "parameters": [
              "String filename"
            ]
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 2,
            "name": "endGraph",
            "parameters": []
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "printNode",
            "parameters": []
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "printNode",
            "parameters": [
              "String s"
            ]
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "printEdgeTo",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": 2,
            "name": "toString",
            "parameters": []
          }
        ],
        "number_of_lines": 51,
        "implemented_by": [],
        "type": "class",
        "extended_by": [
          "STATEMENT",
          "PROGRAM"
        ]
      },
      {
        "part_of": [
          "Node"
        ],
        "name": "STATEMENT",
        "fields": [],
        "functions": [
          {
            "methodModifiers": [
              "abstract",
              "public"
            ],
            "return_type": null,
            "methodLines": null,
            "name": "parse",
            "parameters": []
          },
          {
            "methodModifiers": [
              "abstract",
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": null,
            "name": "evaluate",
            "parameters": []
          },
          {
            "methodModifiers": [
              "static",
              "public"
            ],
            "return_type": null,
            "methodLines": 2,
            "name": "enterScope",
            "parameters": [
              "String s"
            ]
          },
          {
            "methodModifiers": [
              "abstract",
              "public"
            ],
            "return_type": null,
            "methodLines": null,
            "name": "astDrawer",
            "parameters": []
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 2,
            "name": "startGraph",
            "parameters": [
              "String filename"
            ]
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 2,
            "name": "endGraph",
            "parameters": []
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "printNode",
            "parameters": []
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "printNode",
            "parameters": [
              "String s"
            ]
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "printEdgeTo",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": 2,
            "name": "toString",
            "parameters": []
          },
          {
            "methodModifiers": [
              "static",
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "STATEMENT",
              "dimensions": []
            },
            "methodLines": 2,
            "name": "getSubStatement",
            "parameters": []
          }
        ],
        "number_of_lines": 14,
        "implemented_by": [],
        "type": "abstract",
        "extended_by": [
          "PRINT",
          "LOOP"
        ]
      },
      {
        "part_of": [
          "STATEMENT"
        ],
        "name": "PRINT",
        "fields": [
          "String simpleVal"
        ],
        "functions": [
          {
            "methodModifiers": [
              "abstract",
              "public"
            ],
            "return_type": null,
            "methodLines": null,
            "name": "parse",
            "parameters": []
          },
          {
            "methodModifiers": [
              "abstract",
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": null,
            "name": "evaluate",
            "parameters": []
          },
          {
            "methodModifiers": [
              "static",
              "public"
            ],
            "return_type": null,
            "methodLines": 2,
            "name": "enterScope",
            "parameters": [
              "String s"
            ]
          },
          {
            "methodModifiers": [
              "abstract",
              "public"
            ],
            "return_type": null,
            "methodLines": null,
            "name": "astDrawer",
            "parameters": []
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 2,
            "name": "startGraph",
            "parameters": [
              "String filename"
            ]
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 2,
            "name": "endGraph",
            "parameters": []
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "printNode",
            "parameters": []
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "printNode",
            "parameters": [
              "String s"
            ]
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "printEdgeTo",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": 2,
            "name": "toString",
            "parameters": []
          },
          {
            "methodModifiers": [
              "static",
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "STATEMENT",
              "dimensions": []
            },
            "methodLines": 2,
            "name": "getSubStatement",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": null,
            "methodLines": 2,
            "name": "parse",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": 2,
            "name": "evaluate",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "astDrawer",
            "parameters": []
          }
        ],
        "number_of_lines": 25,
        "implemented_by": [],
        "type": "class",
        "extended_by": []
      },
      {
        "part_of": [],
        "name": "Tokenizer",
        "fields": [
          "String program",
          "String tokens",
          "int currentToken",
          "Tokenizer theTokenizer"
        ],
        "functions": [
          {
            "methodModifiers": [
              "abstract",
              "public"
            ],
            "return_type": null,
            "methodLines": null,
            "name": "parse",
            "parameters": []
          },
          {
            "methodModifiers": [
              "abstract",
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": null,
            "name": "evaluate",
            "parameters": []
          },
          {
            "methodModifiers": [
              "static",
              "public"
            ],
            "return_type": null,
            "methodLines": 2,
            "name": "enterScope",
            "parameters": [
              "String s"
            ]
          },
          {
            "methodModifiers": [
              "abstract",
              "public"
            ],
            "return_type": null,
            "methodLines": null,
            "name": "astDrawer",
            "parameters": []
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 2,
            "name": "startGraph",
            "parameters": [
              "String filename"
            ]
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 2,
            "name": "endGraph",
            "parameters": []
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "printNode",
            "parameters": []
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "printNode",
            "parameters": [
              "String s"
            ]
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "printEdgeTo",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": 2,
            "name": "toString",
            "parameters": []
          },
          {
            "methodModifiers": [
              "static",
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "STATEMENT",
              "dimensions": []
            },
            "methodLines": 2,
            "name": "getSubStatement",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": null,
            "methodLines": 2,
            "name": "parse",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": 2,
            "name": "evaluate",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "astDrawer",
            "parameters": []
          },
          {
            "methodModifiers": [
              "private"
            ],
            "return_type": null,
            "methodLines": 5,
            "name": "tokenize",
            "parameters": []
          },
          {
            "methodModifiers": [
              "private"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": 3,
            "name": "checkNext",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": 3,
            "name": "getNext",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": {
              "name": "boolean",
              "dimensions": []
            },
            "methodLines": 3,
            "name": "checkToken",
            "parameters": [
              "String regexp"
            ]
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": 4,
            "name": "getAndCheckNext",
            "parameters": [
              "String regexp"
            ]
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": {
              "name": "boolean",
              "dimensions": []
            },
            "methodLines": 1,
            "name": "moreTokens",
            "parameters": []
          },
          {
            "methodModifiers": [
              "static",
              "public"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "makeTokenizer",
            "parameters": [
              "String filename"
            ]
          },
          {
            "methodModifiers": [
              "static",
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "Tokenizer",
              "dimensions": []
            },
            "methodLines": 1,
            "name": "getTokenizer",
            "parameters": []
          }
        ],
        "number_of_lines": 90,
        "implemented_by": [],
        "type": "class",
        "extended_by": []
      },
      {
        "part_of": [],
        "name": "Main",
        "fields": [
          "Map symbolTable"
        ],
        "functions": [
          {
            "methodModifiers": [
              "abstract",
              "public"
            ],
            "return_type": null,
            "methodLines": null,
            "name": "parse",
            "parameters": []
          },
          {
            "methodModifiers": [
              "abstract",
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": null,
            "name": "evaluate",
            "parameters": []
          },
          {
            "methodModifiers": [
              "static",
              "public"
            ],
            "return_type": null,
            "methodLines": 2,
            "name": "enterScope",
            "parameters": [
              "String s"
            ]
          },
          {
            "methodModifiers": [
              "abstract",
              "public"
            ],
            "return_type": null,
            "methodLines": null,
            "name": "astDrawer",
            "parameters": []
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 2,
            "name": "startGraph",
            "parameters": [
              "String filename"
            ]
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 2,
            "name": "endGraph",
            "parameters": []
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "printNode",
            "parameters": []
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "printNode",
            "parameters": [
              "String s"
            ]
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "printEdgeTo",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": 2,
            "name": "toString",
            "parameters": []
          },
          {
            "methodModifiers": [
              "static",
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "STATEMENT",
              "dimensions": []
            },
            "methodLines": 2,
            "name": "getSubStatement",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": null,
            "methodLines": 2,
            "name": "parse",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": 2,
            "name": "evaluate",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "astDrawer",
            "parameters": []
          },
          {
            "methodModifiers": [
              "private"
            ],
            "return_type": null,
            "methodLines": 5,
            "name": "tokenize",
            "parameters": []
          },
          {
            "methodModifiers": [
              "private"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": 3,
            "name": "checkNext",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": 3,
            "name": "getNext",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": {
              "name": "boolean",
              "dimensions": []
            },
            "methodLines": 3,
            "name": "checkToken",
            "parameters": [
              "String regexp"
            ]
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": 4,
            "name": "getAndCheckNext",
            "parameters": [
              "String regexp"
            ]
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": {
              "name": "boolean",
              "dimensions": []
            },
            "methodLines": 1,
            "name": "moreTokens",
            "parameters": []
          },
          {
            "methodModifiers": [
              "static",
              "public"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "makeTokenizer",
            "parameters": [
              "String filename"
            ]
          },
          {
            "methodModifiers": [
              "static",
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "Tokenizer",
              "dimensions": []
            },
            "methodLines": 1,
            "name": "getTokenizer",
            "parameters": []
          },
          {
            "methodModifiers": [
              "static",
              "public"
            ],
            "return_type": null,
            "methodLines": 7,
            "name": "main",
            "parameters": [
              "String args"
            ]
          }
        ],
        "number_of_lines": 22,
        "implemented_by": [],
        "type": "class",
        "extended_by": []
      },
      {
        "part_of": [
          "Node"
        ],
        "name": "PROGRAM",
        "fields": [
          "List statements"
        ],
        "functions": [
          {
            "methodModifiers": [
              "abstract",
              "public"
            ],
            "return_type": null,
            "methodLines": null,
            "name": "parse",
            "parameters": []
          },
          {
            "methodModifiers": [
              "abstract",
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": null,
            "name": "evaluate",
            "parameters": []
          },
          {
            "methodModifiers": [
              "static",
              "public"
            ],
            "return_type": null,
            "methodLines": 2,
            "name": "enterScope",
            "parameters": [
              "String s"
            ]
          },
          {
            "methodModifiers": [
              "abstract",
              "public"
            ],
            "return_type": null,
            "methodLines": null,
            "name": "astDrawer",
            "parameters": []
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 2,
            "name": "startGraph",
            "parameters": [
              "String filename"
            ]
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 2,
            "name": "endGraph",
            "parameters": []
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "printNode",
            "parameters": []
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "printNode",
            "parameters": [
              "String s"
            ]
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "printEdgeTo",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": 2,
            "name": "toString",
            "parameters": []
          },
          {
            "methodModifiers": [
              "static",
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "STATEMENT",
              "dimensions": []
            },
            "methodLines": 2,
            "name": "getSubStatement",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": null,
            "methodLines": 2,
            "name": "parse",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": 2,
            "name": "evaluate",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "astDrawer",
            "parameters": []
          },
          {
            "methodModifiers": [
              "private"
            ],
            "return_type": null,
            "methodLines": 5,
            "name": "tokenize",
            "parameters": []
          },
          {
            "methodModifiers": [
              "private"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": 3,
            "name": "checkNext",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": 3,
            "name": "getNext",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": {
              "name": "boolean",
              "dimensions": []
            },
            "methodLines": 3,
            "name": "checkToken",
            "parameters": [
              "String regexp"
            ]
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": 4,
            "name": "getAndCheckNext",
            "parameters": [
              "String regexp"
            ]
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": {
              "name": "boolean",
              "dimensions": []
            },
            "methodLines": 1,
            "name": "moreTokens",
            "parameters": []
          },
          {
            "methodModifiers": [
              "static",
              "public"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "makeTokenizer",
            "parameters": [
              "String filename"
            ]
          },
          {
            "methodModifiers": [
              "static",
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "Tokenizer",
              "dimensions": []
            },
            "methodLines": 1,
            "name": "getTokenizer",
            "parameters": []
          },
          {
            "methodModifiers": [
              "static",
              "public"
            ],
            "return_type": null,
            "methodLines": 7,
            "name": "main",
            "parameters": [
              "String args"
            ]
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "parse",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": 3,
            "name": "evaluate",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": null,
            "methodLines": 4,
            "name": "astDrawer",
            "parameters": []
          }
        ],
        "number_of_lines": 41,
        "implemented_by": [],
        "type": "class",
        "extended_by": []
      },
      {
        "part_of": [
          "STATEMENT"
        ],
        "name": "LOOP",
        "fields": [
          "List statements",
          "int times"
        ],
        "functions": [
          {
            "methodModifiers": [
              "abstract",
              "public"
            ],
            "return_type": null,
            "methodLines": null,
            "name": "parse",
            "parameters": []
          },
          {
            "methodModifiers": [
              "abstract",
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": null,
            "name": "evaluate",
            "parameters": []
          },
          {
            "methodModifiers": [
              "static",
              "public"
            ],
            "return_type": null,
            "methodLines": 2,
            "name": "enterScope",
            "parameters": [
              "String s"
            ]
          },
          {
            "methodModifiers": [
              "abstract",
              "public"
            ],
            "return_type": null,
            "methodLines": null,
            "name": "astDrawer",
            "parameters": []
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 2,
            "name": "startGraph",
            "parameters": [
              "String filename"
            ]
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 2,
            "name": "endGraph",
            "parameters": []
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "printNode",
            "parameters": []
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "printNode",
            "parameters": [
              "String s"
            ]
          },
          {
            "methodModifiers": [
              "protected"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "printEdgeTo",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": 2,
            "name": "toString",
            "parameters": []
          },
          {
            "methodModifiers": [
              "static",
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "STATEMENT",
              "dimensions": []
            },
            "methodLines": 2,
            "name": "getSubStatement",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": null,
            "methodLines": 2,
            "name": "parse",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": 2,
            "name": "evaluate",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "astDrawer",
            "parameters": []
          },
          {
            "methodModifiers": [
              "private"
            ],
            "return_type": null,
            "methodLines": 5,
            "name": "tokenize",
            "parameters": []
          },
          {
            "methodModifiers": [
              "private"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": 3,
            "name": "checkNext",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": 3,
            "name": "getNext",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": {
              "name": "boolean",
              "dimensions": []
            },
            "methodLines": 3,
            "name": "checkToken",
            "parameters": [
              "String regexp"
            ]
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": 4,
            "name": "getAndCheckNext",
            "parameters": [
              "String regexp"
            ]
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": {
              "name": "boolean",
              "dimensions": []
            },
            "methodLines": 1,
            "name": "moreTokens",
            "parameters": []
          },
          {
            "methodModifiers": [
              "static",
              "public"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "makeTokenizer",
            "parameters": [
              "String filename"
            ]
          },
          {
            "methodModifiers": [
              "static",
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "Tokenizer",
              "dimensions": []
            },
            "methodLines": 1,
            "name": "getTokenizer",
            "parameters": []
          },
          {
            "methodModifiers": [
              "static",
              "public"
            ],
            "return_type": null,
            "methodLines": 7,
            "name": "main",
            "parameters": [
              "String args"
            ]
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": null,
            "methodLines": 1,
            "name": "parse",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": 3,
            "name": "evaluate",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": null,
            "methodLines": 4,
            "name": "astDrawer",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": null,
            "methodLines": 6,
            "name": "parse",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": {
              "arguments": null,
              "sub_type": null,
              "name": "String",
              "dimensions": []
            },
            "methodLines": 2,
            "name": "evaluate",
            "parameters": []
          },
          {
            "methodModifiers": [
              "public"
            ],
            "return_type": null,
            "methodLines": 2,
            "name": "astDrawer",
            "parameters": []
          }
        ],
        "number_of_lines": 46,
        "implemented_by": [],
        "type": "class",
        "extended_by": []
      }
    ]
  }`;

const classStore = {};

const objStore = {};

function addFunctionsToCircle(classObj){
    classObj.functions.forEach(funcObj => {
        classStore[classObj.name].children.push({
            name: funcObj.name,
            size: (funcObj.methodLines) ? funcObj.methodLines : 1.5,
            parameters: funcObj.parameters,
            return_type: funcObj.return_type && funcObj.return_type.name,
            modifiers: funcObj.methodModifiers
        })
    })
    console.log(classStore[classObj.name].children);
}

function digIntoSubclasses(parent,classObj){
    console.log(parent)
    // add the extended by child to children for classStore[classObj.name]
    if (classObj.extended_by.length == 0){
        console.log(parent)
        return parent;
    }
    for (let i = 0; i < classObj.extended_by; i++) {
        let subClass = classObj.extended_by[i];
        console.log(objStore[subClass].name)
        addChild(parent,{name: objStore[subClass].name})
        classObj = objStore[subClass];
        console.log(classObj)
        parent = parent.children[parent.children.length -1];
        console.log(parent)
        return digIntoSubclasses(parent,classObj);
    }
}

function addChild(parent,child){
    if (parent.children){
        parent.children.push(child)
    }else{
        parent.children = [child]
    }
}

function orderInheritance(output){
    let outputJson = JSON.parse(output);
    // console.log(outputJson.classes[0].name);
    outputJson.classes.forEach(element =>{
        objStore[element.name] = element;
    });
    

    for (let key in objStore){
        let classObj = objStore[key];
        // console.log(classStore["Node"])
        
        // console.log(classObj)
        if (!classObj.part_of.length){
            // root class, add as top level prop on classStore
            classStore[classObj.name] = {
                name: classObj.name
            };
            if (!classStore[classObj.name].children){
                classStore[classObj.name].children = [];
            }
            // add functions to root class
            //console.log(classObj.functions)
            addFunctionsToCircle(classObj);
            
            // dig into extended_by
            if (classObj.extended_by.length){
               
                let nestedChildren = digIntoSubclasses(classStore[classObj.name], classObj);
                console.log(nestedChildren)

            }else{
                // no sub classes, add functions to circle
                
                //console.log( classStore[classObj.name].children)
            }
        }
    }

    // outputJson.classes.forEach(classObj => {
    //     console.log(!classObj.part_of.length)
    //     if (!classObj.part_of.length){
    //         // Not extending anything
    //         classStore[classObj.name] = {
    //             name: classObj.name,
    //             children: []
    //         }
    //     }else{
    //         // update inheritance of class
    //         let parent = classObj.part_of[0];
    //         console.log(parent)
    //         console.log(classStore[parent]);
    //         if (classStore[parent]){
    //             // already created parent object
    //             classStore[parent].children.push({name: classObj.name})
    //         }

    //     }
    // });
    
    
}
orderInheritance(output);