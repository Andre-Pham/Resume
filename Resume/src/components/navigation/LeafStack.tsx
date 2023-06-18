import LeafScreen from "./LeafScreen";

class LeafStack {

    /**
     * @param screens the screens in the stack, the first element in the array will be taken as the first screen
     * @param options the stack options, provided to the stack (https://reactnavigation.org/docs/stack-navigator)
     */
    constructor(
        public readonly options?: object,
    ) { }

    public readonly screens: LeafScreen[] = []

    public addScreen(screen: LeafScreen): LeafStack {
        this.screens.push(screen);
        return this;
    }

    public addNewScreen(name: string, id: string, component: React.FC, options?: object): LeafStack {
        let screen = new LeafScreen(name, id, component, options);
        this.addScreen(screen);
        return this;
    }

}

export default LeafStack;