import base64
import re
import sys
import json
import os
 
 


f= open("lidn.txt", "r").read()

b=f



tet = json.loads(b)
  

text_base64 =  tet["text"][23:]



bytes_base64 = text_base64.encode()
data = base64.b64decode(bytes_base64)
open('image.jpeg', 'wb').write(data)


os.system("test.py")
 
