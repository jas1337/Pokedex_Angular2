export class EvolutionChain {


    firstForm: string;
    firstFormUrl: string;
    secondForm?: string;
    secondFormUrl?: string;
    thirdForm?: string;
    thirdFormUrl?: string

    constructor(firstForm: string, firstFormUrl: string, secondForm: string, secondFormUrl: string, thirdForm: string, thirdFormUrl: string, ) {
        this.firstForm = firstForm;
        this.firstFormUrl = firstFormUrl;
        this.secondForm = secondForm;
        this.secondFormUrl = secondFormUrl;
        this.thirdForm = thirdForm;
        this.thirdFormUrl = thirdFormUrl;

    }

}