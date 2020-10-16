from PIL import Image , ImageFilter
import glob
import cv2
import base64

def get_concat_h(im2, im1):
    dst = Image.new('RGB', (im1.width + im2.width, im1.height))
    dst.paste(im1, (0, 0))
    dst.paste(im2, (im1.width, 0))
    return dst




def runacnedetector(  name):
  ratio = [[[0 for k in range(256)] for j in range(256)] for i in range(256)]
  with open("./noesis.sadi", "r") as file:
    for i in range(256):
      for j in range(256):
        for k in range(256):
          probability = file.readline()
          ratio[i][j][k] = float(probability)
   
 
 


  
  #encoded_string = base64.b64encode(image_file.read())
  image = Image.open("./aaa.jpeg")
  im = image.convert('RGB')
  
  width, height = im.size
  im2 = Image.new(im.mode, im.size)
  for y in range(height):
    for x in range(width):
      red, green, blue = im.getpixel((x, y))
      if(ratio[red][green][blue] > .22):#iold model .22        
        im2.putpixel((x, y), (255, 255, 255))
      elif(ratio[red][green][blue] > .17):#iold model .22        
        im2.putpixel((x, y), (150, 150, 150))          
      else:
        im2.putpixel((x, y), (0, 0, 0))
    im2.save("./e-d.jpg")

#########################################################

  names =["./e-d.jpg"]

  names_original_image=["aaa.jpeg"]


  for i in range(0,len(names)):
      img = cv2.imread(names[i])
      blur = cv2.blur(img,(5,5))
      blur = cv2.blur(blur,(5,5))
      cv2.imwrite("heatmap"+str(i)+".png",blur)############################################### 
      imageback = Image.open(names_original_image[i]).convert("RGBA")#########    
      img2 = Image.open("heatmap"+str(i)+".png")#############
      img2 = img2.convert("RGBA")
      data2 = img2.getdata()
      newData = []
      for j in range(0,len(data2)):
          if   data2[j][0] >150:
              newData.append((255, 0, 0,255))
          elif   data2[j][0] >100:
              newData.append((255,127,80,255))
          elif   data2[j][0] >70:
              newData.append((100, 0, 200,255))
          elif   data2[j][0] >30:
              newData.append((50, 0, 200,255))
          elif   data2[j][0] >10:
              newData.append((0, 0, 250,205))
          else:
              newData.append((0, 0, 0,0))
      img2.putdata(newData)
      blended = Image.blend(img2, imageback, alpha=0.7)
      blended.save("./heatmap.png")###################################

  im1 = Image.open('./heatmap.png')############################################
  im2 = Image.open('./aaa.jpeg')####################################
  get_concat_h(im1, im2).save("./final.jpg")########dont save ?######################


  data = open('final.jpg', 'rb').read()
  bytes_base64 = base64.b64encode(data)
  text_base64 = bytes_base64.decode()


   
  #print("got here ")
  return  "data:image/jpeg;base64," + text_base64 

