# importing modules
from flask import Flask, render_template 
import random
  
# declaring app name
app = Flask(__name__)
  

sen = []
name = ['나오코','미도리','와타나베','레이코']

f = open("nwood.txt", "rt", encoding='UTF8')
lines = f.readlines()
select = random.choice(name)

for l in lines:
	rs = l.rstrip()
	if select in rs:
		sen.append(rs)
    #print(rs)
  
print(sen)

# defining home page
@app.route('/')
def homepage():
  
# returning index.html and list
# and length of list to html page
    return render_template("index2.html", len = len(sen), sen = sen)
  
    # if __name__ == '__main__':
  
    # running app
    app.run(use_reloader = True, debug = True)