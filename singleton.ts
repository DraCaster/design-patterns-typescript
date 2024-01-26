//Estructura base

class Singleton {
    private static instance: Singleton;
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance
        }

        Singleton.instance = this;
    }
}

const singleton = new Singleton();

// Otra version de Singleton para proteger la instancia de una clase y 
//asegurarnos que solo exista una instancia de la clase

class SingletonTS {
    private static instance: SingletonTS;
    private constructor() {
    }

    public static getInstance(): SingletonTS {
        if (!SingletonTS.instance) {
            SingletonTS.instance = new SingletonTS();
        }

        return SingletonTS.instance;
    }
}

const singletonTS = SingletonTS.getInstance();

//Ejemplo práctico

class WeekDays {
    private static instance: WeekDays;
    daysEs = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    daysEn = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    language: string;

    constructor(language: string) {
        this.language = language;

        if (WeekDays.instance) {
            return WeekDays.instance;
        }

        WeekDays.instance = this;
    }

    getDays() {
        return this.language === 'es' ? this.daysEs : this.daysEn;
    }
}

const weekDays = new WeekDays('es');
console.log(weekDays.getDays());