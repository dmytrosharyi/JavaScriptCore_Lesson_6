function CheckAge(age) {
    return (age > 18) || confirm('Do You have permission?');
}

CheckAge(prompt('What is your age?'));