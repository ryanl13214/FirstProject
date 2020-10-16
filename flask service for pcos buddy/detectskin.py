from PIL import Image, ImageFilter
import base64
import glob

#  if   image[0] < 175 and    image[0] > 109  and   image[1] < 135 and    image[1] > 75    and   image[2] < 110 and    image[2] > 52:          

def compare(mask,image,blured):
    if   abs(mask[0]- 255) < 55 and  abs(mask[1]-255) <55 and  abs(mask[2]-255) <55:
      if   image[0] < 214 and    image[0] > 109  and   image[1] < 168 and    image[1] > 75    and   image[2] < 142 and    image[2] > 52:            
          if   blured[0]-5 > image[0] and   blured[1]-5 > image[1] and   blured[2]-5 > image[2]:        
              return True
    return False

   




def compareblackwhite(stdimg,bluredimg):
    if   bluredimg[0] < 90 and   bluredimg[1] < 90  and   bluredimg[2] < 90:
        if   stdimg[0] > 100 and   stdimg[1] > 100  and   stdimg[2] > 100:
            return True
    return False









def hirchecker(name):



    ratio = [[[0 for k in range(256)] for j in range(256)] for i in range(256)]

    with open("./skin.sadi", "r") as file:
      for i in range(256):
        for j in range(256):
          for k in range(256):
            probability = file.readline()
            ratio[i][j][k] = float(probability)
    #print('data collected!')

    import glob
    names =["aaaa.jpg"]

     

    for i in range(0,len(names)):
      image = Image.open(names[i])
      im = image.convert('RGB')
      width, height = im.size

      im2 = Image.new(im.mode, im.size)

      for y in range(height):
        for x in range(width):
          red, green, blue = im.getpixel((x, y))


          if(ratio[red][green][blue] > .11):#iold model .22        
            im2.putpixel((x, y), (255, 255, 255))

            
          else:
            im2.putpixel((x, y), (0, 0, 0))


      im2.save("./"+str(names[i][:(len(names[i] )-4)])+".jpg")


    #brown hair
     
    for py in glob.glob("./"+str(names[i][:(len(names[i] )-4)])+".jpg"):
        #print(py)
        img2 = Image.open(py)
        imout=img2
        img2 = img2.convert("RGB")
        maskdata = img2.getdata()
        
        img1 = Image.open("./"+py[:])
        img1 = img1.convert("RGB")
        imagedata = img1.getdata()
        IMAGEOG=Image.open("./"+py[:])

        blurred_image = Image.open("./"+py[:]).filter(ImageFilter.GaussianBlur(15))


        blurred_image = blurred_image.getdata()
        
        newData=[]
        for i in range(0,len(maskdata)):
          if compare(maskdata[i],imagedata[i],blurred_image[i]):
            newData.append((255, 255, 255))
          else:
            newData.append((0, 0, 0))
            
        img2.putdata(newData)
        img3=img2
        img3.putdata(newData)
        img2 = img2.convert("RGB")
        img2 = img2.getdata()
        img3.save("a.jpg")
        blurred_blackwhite = img3.filter(ImageFilter.GaussianBlur(10))
        blurred_blackwhite.save("b.jpg")
        blurred_blackwhite = blurred_blackwhite.convert("RGB")
        blurred_blackwhite = blurred_blackwhite.getdata()
     
        
        newData=[]
        for i in range(0,len(maskdata)):
          if compareblackwhite(img2[i],blurred_blackwhite[i]):
            newData.append((255, 255, 255))
          else:
            newData.append((0, 0, 0))

        img3.putdata(newData)
        img3.save("a.jpg")
        img2=img3
        img3.putdata(newData)
        img2 = img2.convert("RGB")
        img2 = img2.getdata()
        img3.save("a.jpg")
        blurred_blackwhite = img3.filter(ImageFilter.GaussianBlur(20))
        blurred_blackwhite.save("b.jpg")
        blurred_blackwhite = blurred_blackwhite.convert("RGB")
        blurred_blackwhite = blurred_blackwhite.getdata()
     
        
        newData=[]
        for i in range(0,len(maskdata)):
          if compareblackwhite(img2[i],blurred_blackwhite[i]):
            newData.append((255, 255, 255))
          else:
            newData.append((0, 0, 0))

        img3.putdata(newData)
        img3.save("a.jpg")
        img3 = Image.open("a.jpg") 
        img3 = img3.convert("RGB")
        img3 = img3.getdata()

          
        IMAGEOG = IMAGEOG.convert("RGB")
        IMAGEOG = IMAGEOG.getdata()

        
        newData=[]
        for i in range(0,len(img3)):
          if   img3[i][0] > 200 and   img3[i][1] > 200 and   img3[i][2] > 200:   
            newData.append((255, 255, 255))
          else:
            newData.append((IMAGEOG[i][0], IMAGEOG[i][1], IMAGEOG[i][2]))
            
        imout.putdata(newData)    
        imout.save("aaaa.jpg")
        data = open("aaaa.jpg", 'rb').read()

     
    bytes_base64 = base64.b64encode(data)
    text_base64 = bytes_base64.decode()


   
    #print("got here ")
    return  "data:image/jpeg;base64," + text_base64 



if __name__ == "__main__":
    hirchecker("aaaa")









