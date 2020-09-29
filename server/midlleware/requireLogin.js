import jwt from 'jsonwebtoken';
import 'dotenv/config';
import mongoose from 'mongoose';

const User = mongoose.model("User");

module.exports = ((req, res, next) => {
    const {
        authorization
    } = req.headers;

    if(!authorization) {
        res.status(401).json({error: `You are not allowed to this ressources, pleast try to connect`});
    }

    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, process.env.JWT_SECRET, (error, payload) => {
        if(error) {
            return res.status(401).json({ error: `You are not allowed to this ressources, pleast try to connect` });
        }

        const {
            _id
        } = payload;
        User.findOne(_id)
        .then(userData => {
            req.user = userData;
        })
        .catch(error => {
            res.status(422).json({error: error});
        })
        next();
    });
})