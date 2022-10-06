//7.	Pass the object created in assignment 5 to an arrow function. The function must return a string which contains the vehicleid, brand, ,model, variant & speed.

const vehicle = {
    vehicleid: 1234,
    brand: "maruti",
    model: '2015',
    variant: 'one year',

    specification: {
        firstGear: function () {
            console.log('vehicle is in first gear...');
        },
        secondGear: function () {
            console.log('vehicle is in second gear...');
        },
        maxSpeed: 60,
        changeGear: function () {
            return (this.firstGear(), this.secondGear());
        }
    }
};

const details = (vehicle) => {
    console.log(JSON.stringify(vehicle));
}
details();