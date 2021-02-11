// import React, {Component, PureComponent} from "react";
// import {adjectives, starWars, uniqueNamesGenerator} from "unique-names-generator";
//
// interface INamesState {
//     adjective: string;
//     starWarsWord: string;
// }
//
// export class Names extends Component<{}, INamesState> {
//     constructor(props: {}) {
//         super(props)
//
//         this.state = {
//             adjective: this.generateWord(adjectives),
//             starWarsWord: this.generateWord(starWars),
//         }
//     }
//
//     public componentDidMount(): void {
//         const interval = setInterval(() => {
//             this.setState({adjective: this.generateWord(adjectives)})
//         }, 2000)
//         setTimeout(() => {
//             clearInterval(interval)
//         }, 6000)
//     }
//
//     public render() {
//         return (
//             <h1 className={StyleSheet.words}>
//                 <Adjective adjective={this.state.adjective}/>
//                 {"\u00A0"}
//                 <StarWarsWord starWarsWord={this.state.starWarsWord}/>
//             </h1>
//         )
//     }
//
//     private generateWord(dictionary: string[]): string {
//         const defaultGeneratorConfig: Config = {
//             length: 1,
//             dictionaries: []
//         }
//         return uniqueNamesGenerator(Object.assign(
//             {},
//             defaultGeneratorConfig,
//             {dictionaries: [dictionary]}
//         ))
//     }
// }
//
//
// interface iFirstNameProps {
//     adjective: string;
// }
//
// class Adjective extends Component<iFirstNameProps> {
//     render() {
//         console.log("=============");
//         console.log(">> Adjective is printing");
//         return (
//             <span>{this.props.adjective}</span>
//         )
//     }
// }
//
// interface ILastNameProps {
//     starWarsWord: string;
// }
//
// class StarWarsWord extends PureComponent <ILastNameProps> {
//     render() {
//         console.log(">> SW word is printing");
//         return (
//             <span>
//                 {this.props.starWarsWord}
//                     </span>
//         )
//     }
// }