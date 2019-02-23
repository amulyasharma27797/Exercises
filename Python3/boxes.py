from abc import ABC

#Abstract Class Box
class Box(ABC):
    
    def add(self):
        pass
    
    def empty(self):
        pass

    def count(self):
        pass


#class Item made
class item():
    """defines items"""
    def __init__(self, name, value):
        self.name = name
        self.value = value


#class ListBox made
class ListBox(Box):
    """uses list"""
    def __init__(self):
        lists=[]
        self.lists = lists
    
    def add(self, *items):
        for i in items:
            self.lists.append(i)

    def empty(self):
        l=[]
        for items in self.lists:
            l.append(items)
        self.lists.clear()
        return l

    def count(self):
        return len(self.lists)


#class DictBox made
class DictBox(Box):
    """uses dict"""
    def __init__(self):
        dicts={}
        self.dicts=dicts

    def add(self,*args):
        for item in args:
            self.dicts.update({item.name:item.value})
    
    def empty(self):
        l=[]
        for key,val in self.dicts.items():
            listitem=item(key,val)
            l.append(listitem)
        self.dicts.clear()
        return l

    def count(self):
        return len(self.dicts.items())

#repack_boxes function
def repack_boxes(*args):
    boxes = []
    boxitems=[]
    for values in args:
        boxes.append(values)
        for item in values.empty():
            boxitems.append(item)
    count=len(boxes)
    itemperbox=int(len(boxitems)/count)
    modval=int(len(boxitems)%count)

    valindex=0

    for valindex in range(count):
        for itemindex in range(itemperbox):
            boxes[valindex].add(boxitems[0])
            boxitems.remove(boxitems[0])


    if(modval!=0):
        for i in range(modval):
            boxes[valindex].add(boxitems[0])
            boxitems.remove(boxitems[0])


    for box in boxes:
        print('for box:' + str(box))
        x=box.empty()
        for i in x:
            print(i.value)



a = item("a",1)
b = item("b",2)
c = item("c",3)
d = item("d",4)
e = item("e",5)
f = item("f",6)
g = item("g",7)
h = item("h",8)
i = item("i",9)
j = item("j",10)
k = item("k",11)
l = item("l",12)
m = item("m",13)
n = item("n",14)
o = item("o",15)
p = item("p",16)
q = item("q",17)
r = item("r",18)
s = item("s",19)
t = item("t",20)
u = item("u",21)
v = item("v",22)
w = item("w",23)
x = item("x",24)
y = item("y",25)
z = item("z",26)



#LISTBOX
lists=ListBox()
lists.add(a,b,c,d,e,f)
x=lists.empty()
for values in x:
    print(values.name+":"+str(values.value))


#DICTBOX
dicts=DictBox()
dicts.add(e,f,g,h)
x=dicts.empty()
for values in x:
    print(values.name+":"+str(values.value))
