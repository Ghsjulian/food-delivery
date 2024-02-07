import os

dir_name = "./"
file_name = "product__"
dir_list = os.listdir(dir_name)



#print(dir_list)
i = 0
while i<len(dir_list):
    file = dir_name+dir_list[i]
    if file == dir_name+"rename.py":
        continue
    os.rename(file,file_name+str(i)+".png")
    print(file+"\n")
    i+=1


print("\n All File Has Renamed Successfully !")

