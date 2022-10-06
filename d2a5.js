/*
5.	Create a JS object which stores the following details about a vehicle:
vehicleid                a number
brand                      a string
model                     a string
variant                    a string
specifications             an object containing the following members:
                                    firstGear          a function which logs some message
                                    secondGear     a function which logs some message
                                    maxSpeed       a number
                                    changeGear    a function which calls “firstGear” and 
    “secondGear” functions 
Print the vehicleid, brand, model, variant on the browser console. Invoke the changeGear function & display the speed on the browser console.
*/
// 5.
const vehicle = {
    vehicleid: 1234,
    brand: "maruti",
    model: '2015',
    variant: 'one year',

    specification: {
        firstGear: function () {
            console.log('vehicle is in first gear...');
            maxSpeed = 30;
            console.log(`maxspeed is : ${maxSpeed}`);
        },
        secondGear: function () {
            console.log('vehicle is in second gear...');
            maxSpeed = 60;
            console.log(`maxspeed is : ${maxSpeed}`);
        },
        maxSpeed: 90,
        changeGear: function () {
            return (this.firstGear(), this.secondGear());
        }
    }
};
const details = (vehicle) => {
    console.log(`vehicleid is : ${vehicle.vehicleid}`);
    console.log(`vehicle brand is : ${vehicle.brand}`);
    console.log(`vehicle model is : ${vehicle.model}`);
    console.log(`vehicle variant is : ${vehicle.variant}`);
    vehicle.specification.changeGear();
    console.log(vehicle.specification.maxSpeed);
    //  console.log('inside details function');
    //  console.log(Object.values(vehicle));
}
details(vehicle);