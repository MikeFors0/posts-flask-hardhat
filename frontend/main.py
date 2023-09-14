from flask import Flask, redirect, render_template, request, url_for, flash, session
import web
import os


app = Flask(__name__)
app.secret_key = os.urandom(69).hex()


@app.route('/')
def index1():
    posts = web.View()
    # flash(posts)
    # print( posts)
    return render_template('index.html', posts=posts)


@app.route('/post/<int:id>')
def post(id):
    posts = web.ViewID(id)
    # flash(posts)
    # print(data)
    return render_template('post.html', post=posts)


@app.route('/create', methods=["GET", "POST"])
def create():
    if session.get('user') != None:
        if request.method == 'POST':
            label = request.form.get('label')
            message = request.form.get('message')
            key = request.form.get('key')
            if not label:
                flash('Title is not')
            else:
                result = web.createNewPost(label, message, key)
                print(result)
                if type(result) != str:
                    print(result)
                else:
                    flash("Created")
                    print(result)
                return render_template('create.html', label=label, message=message)
        return render_template('create.html')
    return redirect('/')    


@app.route('/delete/<int:id>', methods=["GET", "POST"])
def delete(id):
    if session.get('user') != None:
        if request.method == "POST":
            key = request.form.get('key')
            res = web.removePost(id, key)
            print(res)
            if type(res) == str:
                flash('delete')
            else:
                flash(res)
            return render_template('delete.html', delete=web.ViewID(id))
        return render_template('delete.html')
    return redirect('/')    


# функция авторизации пользователя
@app.route('/login', methods=["GET", "POST"])
def login():
    if session.get('user') == None:
        if request.method == "POST":
            acc = request.form.get('acc')
            key = request.form.get('key')
            name = request.form.get('name')
            res = web.authorization(acc, key, name)
            if type(res) == str:
                flash(res)
                return redirect('/login')
            session['user'] = res
            return redirect('/lk')
        return render_template('login.html')
    return redirect('/')


# функция регистрации пользователя
@app.route('/reg', methods=["GET", "POST"])
def reg():
    if session.get('user') == None:
        if request.method == "POST":
            acc = request.form.get('acc')
            key = request.form.get('key')
            name = request.form.get('name')
            res = web.registration(acc, key, name)
            if type(res) == str:
                flash(res)
                return redirect('/reg')
            # return redirect('/lk')
        return render_template('reg.html')
    return redirect('/')


@app.route('/edit/<int:id>', methods=["POST", "GET"])
def edit(id):
    if request.method == "POST":
        label = request.form.get("label")
        message = request.form.get("message")
        key = request.form.get("key")
        res = web.changePostData(id, label, message, key)
        if type(res) == str:
            flash("edited")
        else:
            flash(res)
        return render_template("edit.html", edit = web.ViewID(id))
    return render_template("edit.html")


@app.route('/lk')
def lk():
    if session.get('user') != None:
        return render_template('lk.html', res=session['user'])
    return redirect('/login')


@app.route('/logout')
def logout():
    if session.get('user') != None:
        session.pop('user', None)
    return redirect('/')  


@app.route('/help')
def help():
    return render_template("help.html")


if __name__ == "__main__":
    app.run(debug=True, port=5555)