class Teacher{
    constructor(name, subject, institute){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is teaching math');
    }
}

const ketab = new Teacher('ketab uddin', 'math');
console.log(ketab);
