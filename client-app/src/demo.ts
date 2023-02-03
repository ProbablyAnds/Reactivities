export interface Duck
{
    name: string;
    numLeg: number;
    makeSound: (sound: string) => void;
    //makeSound?: (sound: string) => void; //Specify what is returned 
}   //? make this optional

//let data: number | string = 42; //non strong typing

//data = '42';

const duck1 : Duck = 
{
    name: 'huey',
    numLeg: 2,
    makeSound: (sound: any) => console.log(sound)
}

const duck2 : Duck = 
{
    name: 'dewey',
    numLeg: 2,
    makeSound: (sound: any) => console.log(sound)
}

//duck1.makeSound!('quack');  //! overrides the check for the optional prop
                            //Try aviud the use of this
                            
duck1.makeSound('Quack');

export const ducks = [duck1, duck2];