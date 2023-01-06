function job() {
    document.open()
    document.write('Hello, MAN \n')
    document.close()
}
setTimeout(job, 1500)


const sum = (a, b) => (a+b)
console.log(sum(3,3))