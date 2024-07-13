const { User } = require('../Models');

async function checkUsernameExists(username) {
    try {
        const user = await User.findOne({ username: username });
        return !!user; // Convert user to boolean (true if found, false if not)
    } catch (error) {
        console.log('Error checking username existence:', error);
        return false; // Handle database error or other exceptions
    }
}

async function checkEmailExists(email) {
    try {
        const user = await User.findOne({ email: email });
        return !!user; // Convert user to boolean (true if found, false if not)
    } catch (error) {
        console.log('Error checking email existence:', error);
        return false; // Handle database error or other exceptions
    }
}

module.exports = {
    checkUsernameExists,
    checkEmailExists
};
