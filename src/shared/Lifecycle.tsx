import React, {Component} from "react";

interface ILifecycleProps {
    someProp: number
}

interface ILifecycleState {
    stateField: number;
    isMounted: boolean;
    hasError: boolean;
}

export class Lifecycle extends Component<ILifecycleProps, ILifecycleState> {
    constructor(props: ILifecycleProps) {
        super(props);

        this.state = {stateField: 0, isMounted: false, hasError: false}
        // this.handleClick = this.handleClick.bind(this)
        // this.setState({})
    }

    static getDerivedStateFromProps(props: Readonly<ILifecycleProps>, state: Readonly<ILifecycleState>) {
        return {stateField: props.someProp}
        // return null
    }

    static getDerivedStateFromError(error: Error) {
        return {hasError: true}
    }

    // не использовать при PureComponent
    public shouldComponentUpdate(
        nextProps: Readonly<ILifecycleProps>,
        nextState: Readonly<ILifecycleState>,
        nextContext: any): boolean {
        // return this.state != nextState || this.props != nextProps;
        return false
        // return JSON.stringify(this.state) != JSON.stringify(nextState)
        //     || JSON.stringify(this.props) != JSON.stringify(nextProps)
    }

    public render() {
        if (this.state.hasError) {
            return <div>Error</div>
        }
        return (
            <div>1</div>
        );
    }

    public getSnapshotBeforeUpdate(
        prevProps: Readonly<ILifecycleProps>,
        prevState: Readonly<ILifecycleState>
    ): any | null {
        return 1234
        // return null
    }

    componentDidUpdate(
        prevProps: Readonly<ILifecycleProps>,
        prevState: Readonly<ILifecycleState>,
        snapshot?: any) {
        if (snapshot > 1000) {
            this.setState({})
        }
    }

    public componentDidMount() {
        // document.addEventListener("resize", () => {
        // })
        // setTimeout(() => {
        // }, 0)
        // this.setState({isMounted: true})
    }

    public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        //    logError(errorInfo.componentStack)
        // this.setState({}) wrong!!
    }

    public componentWillUnmount() {
        // document.removeEventListener("resize", () => {})

    }

    // private handleClick = () => {
    //     this.setState({stateField: 1})
    // }

}