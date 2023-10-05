const exp = require('express');
const { Pool } = require('pg');
const app = exp();

const cors = require("cors");
const { response } = require('express')
app.use(cors());
app.use(exp.json());

// Database Connection
const c = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    database: 'ss',
    password: 'sabariz31',
});

c.connect().then(() => {
    console.log("connected !")
})
    .catch((error) => {
        console.log(error)
    })

app.post("/login", (request, response) => {
    const username2 = request.body.username;
    console.log(username2);
    const password2 = request.body.password;
    console.log(request.body.password);
    c.query("select username,password,role_id from logn where username=?", [username2],
        function (error, rows) {
            if (error) {
                //    console.log("error.code");
                const s = { status: 'error' }
                response.send(s);
            }
            else {
                // response.send(result);} 
                // });
                const username1 = rows[0].username;
                const password1 = rows[0].password;
                const role1 = rows[0].role_id;
                if (username2 == username1 && password2 == password1) {
                    if (role1 == '1') {
                        const s = { status: 'pass', 'role': 'admin' };
                        response.send(s);
                    }
                    else if (role1 == '2') {
                        const s = { status: 'pass', 'role': 'supplayer' };
                        response.send(s);
                    }
                    else if (role1 == '3') {
                        const s = { status: 'pass', 'role': 'customer' };
                        response.send(s);
                    }
                }


                else {
                    const se = { status: 'error' };
                    response.send(se);
                }
            }

        });
});

app.listen(3001);




app.get('/login', (req, res) => {
    c.query('select * from logn', (err, result, field) => {
        if (err) throw err;
        console.log(res);
        res.send(result);
    })

})


// PURCHASE DATABASE

app.post("/insertdata", (request, response) => {
    const s_id = request.body.s_id;
    console.log(s_id);
    const bill_no = request.body.bill_no;
    const bill_date = request.body.bill_date;
    const prod_id = request.body.prod_id;
    const bill_amount = request.body.bill_amount;
    const paid_amount = request.body.paid_amount;
    console.log(paid_amount);
    const a = c.query("insert into parchase(s_id,bill_no,bill_date,prod_id,bill_amount,paid_amount) value(?,?,?,?,?,?)", [s_id, bill_no, bill_date, prod_id, bill_amount, paid_amount],
        function (error, result) {
            if (error) {
                console.log("error");
                console.log(error);
            }
            else
                response.send(result);
        });
})



app.get('/parchase', (req, res) => {
    c.query('select * from parchase', (err, result, field) => {
        if (err) throw err;
        console.log(res);
        res.send(result);
    })

})



// SUPPLIER DATABADE


app.post("/insertdata", (request, response) => {
    // const s_id = request.body.s_id;
    // console.log(s_id);
    const c_name = request.body.c_name;
    const c_addr = request.body.c_addr;
    const c_phone = request.body.c_phone;
    const c_Email = request.body.c_Email;
    const p_name = request.body.p_name;
    console.log(p_name);
    const a = c.query("insert into supplier(c_name,c_addr,c_phone,c_Email,p_name) value(?,?,?,?,?)", [c_name, c_addr, c_phone, c_Email, p_name],
        function (error, result) {
            if (error)
                console.log("error");

            else
                response.send(result);
        });
})



app.get('/supplier', (req, res) => {
    c.query('select * from supplier', (err, result, field) => {
        if (err) throw err;
        console.log(res);
        res.send(result);
    })

})


// PRODUCT DATABASE


app.post("/insertdata", (request, response) => {
    const prod_name = request.body.prod_name;
    console.log(prod_name);
    const s_id = request.body.s_id;
    const p_type = request.body.p_type;
    const price = request.body.price;
    const material = request.body.material;
    const catagories = request.body.catagories;
    console.log(catagories);
    const a = c.query("insert into product(prod_name,s_id,p_type,price,material,catagories) value(?,?,?,?,?,?)", [prod_name, s_id, p_type, price, material, catagories],
        function (error, result) {
            if (error) {
                console.log("error");
                console.log(error);
            }
            else
                response.send(result);
        });
})



app.get('/product', (req, res) => {
    c.query('select * from product', (err, result, field) => {
        if (err) throw err;
        console.log(res);
        res.send(result);
    })

})



// REGISTRATION DATABASE


app.post("/insertdata", (request, response) => {
    const first_name = request.body.first_name;
    console.log(first_name);
    const last_name = request.body.last_name;
    const Email_id = request.body.Email_id;
    const password = request.body.password;
    const phone_no = request.body.phone_no;
    const address = request.body.address;
    const state = request.body.state;
    const zip_code = request.body.zip_code;
    const role_id = '3';
    console.log(zip_code);
    c.query("insert into user(first_name,last_name,Email_id,password,phone_no,address,state,zip_code) value(?,?,?,?,?,?,?,?)", [first_name, last_name, Email_id, password, phone_no, address, state, zip_code],
        function (error, result) {
            if (error) {
                console.log("error");
            }
            else
                response.send(result);
        });

    c.query("insert into logn(username,password,role_id) values(?,?,?)", [Email_id, password, role_id],

    )
})


app.get('/user', (req, res) => {
    c.query('select * from user', (err, result, field) => {
        if (err) throw err;
        console.log(res);
        res.send(result);
    })

})