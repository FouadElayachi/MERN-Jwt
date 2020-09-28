import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {JWT_SECRET} from '../keys';
import requireLogin from '../midlleware/requireLogin';

const User = mongoose.model("User");
const router = express.Router();

router.get('/protected', requireLogin , (req, res) => {
    res.send("This is a pirvate ressource, Welcome !");
})

router.post('/signup', (req, res) => {
    const {
        name,
        email,
        password
    } = req.body;

    if (!name || !email || !password) {
        return res.status(422).json({ error: `All fields are required` })
    }
    User.findOne({
        email: email
    })
    .then((saveUser) => {
        if(saveUser){
            return res.status(422).json({ error: `User already exists` });
        }
        bcrypt.hash(password, 12)
        .then(hashedPassword => {
            const user = new User({
                name,
                email,
                password: hashedPassword
            });
            user.save()
                .then(user => {
                    res.json({
                        message: `Hello ${user.name}`
                    })
                })
                .catch(error => {
                    res.json({
                        error: error
                    })
                })
        })
    })
    .catch(error => {
        res.json({
            error: error
        })
    })
});

router.post('/signin', (req, res) => {
    const {
        email,
        password
    } = req.body;
    if (!email || !password) {
        return res.status(422).json({error: `Please provid all the information !`});
    }
    User.findOne({
        email
    })
    .then(savedUser => {
        if(!savedUser) {
            return res.status(422).json({error: `Please verify ur identifiers !`});
        }
        bcrypt.compare(password, savedUser.password)
        .then(doMatch => {
            if(doMatch) {
                //res.send({message: `Welcome ${savedUser.name}`});
                const token = jwt.sign({_id: savedUser._id}, JWT_SECRET);
                const {_id, name, email} = savedUser;
                res.json({
                    token, user:{_id, name, email}
                });
            }
            else {
                res.status(422).send({ error: `Please verify ur identifiers !` });
            }
        })
    })
    .catch(error => {
        res.status(422).json({error: error});
    })
})
export default router;