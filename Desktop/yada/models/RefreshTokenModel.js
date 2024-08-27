const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const RefreshTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '7d',  // This sets the token to expire after 7 days
    },
});

RefreshTokenSchema.statics.createRefreshToken = async function(userId, refreshToken) {
    const newRefreshToken = new this({
        userId,
        token: refreshToken
    });
    await newRefreshToken.save();
    return newRefreshToken;
};

const RefreshToken = mongoose.model('RefreshToken', RefreshTokenSchema);
module.exports = RefreshToken;
