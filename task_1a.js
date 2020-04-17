function checkAge(age) {
    var result = age > 18 ? true : confirm('Do You have permission?');
    return result;
}

checkAge(prompt('What is your age?'));


