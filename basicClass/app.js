new Vue({
    el: '#app',
    data: {
        title: 'Learning Vue',
        name: 'Leyla',
        url: 'http://www.youtube.com',
        classes: ['one', 'two'],
        wage: 10,
        coords: {
            x: 0,
            y: 0
        },
        bindingName:'Ian',
        showName: false,
        showAge: true,
        items: ['Apple', 'Banana', 'Grapes', 'Mango'],
        ninjas: [
            {name: 'Ana', age: 29, belt: 'White'},
            {name: 'Bella', age: 24, belt: 'Orange'},
            {name: 'Peter', age: 39, belt: 'Black'}
        ]
    },
    methods: {
        greet(time){
            return `Hello ${this.name} and Good ${time}!`;
        },

        changeWage(amount){
            this.wage += amount;
        },

        logEvent(e){
            console.log(e);
        },

        logCoords(e){
            this.coords.x = e.offsetX
            this.coords.y = e.offsetY
        },

        updateName(e){
            //console.log(e.target.value);
            this.name = e.target.value
        },

        logMessage(){
            console.log('hi there');
        },

        toggleName(){
            this.showName = !this.showName;
        },

        toggleAge(){
            this.showAge = !this.showAge;
        }
    }
})
