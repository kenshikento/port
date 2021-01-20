import React, { Component } from 'react';
import './Home.scss';
import GitLogo from '../images/GitHub-Mark-64px.png';
import LinkLogo from '../images/LI-Logo.png';
import CvLogo from '../images/cv.png';
import ProfilePic from '../images/profilepic.jpg';
import ProfileImage from '../images/tien_nguyen_150px_small.png';
import Cv from '../images/cv.pdf';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimeLine from '../assets/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faLaptopHouse, faSchool } from '@fortawesome/free-solid-svg-icons'

class Home extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = { 
            isFetching: false,
            timeline: [],
            direction:false,
        };

        //this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
        this.fetchTimeLine();
    }


    fetchTimeLine = () => {
        this.setState({...this.state, isFetching: true,timeline:TimeLine.items});
    };
    
    fetchUpdateTimeLine = () => {
        let data = this.state.timeline;
        let direction = this.state.direction ? false : true;
        this.setState({...this.state, timeline:data.reverse(), direction:direction});
    };    

    render() {
    return (
        <div>
            <div className="header-image">
                <img src = {ProfileImage} alt="profilelogo"/>
            </div>
            <div className="container">
                <div className="icons">
                    <div className="icon">                        
                        <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href="https://github.com/kenshikento?tab=repositories";
                                }}
                            >
                                <img src = {GitLogo} alt ="GitLogo"/>
                        </button>
                    </div>
                    <div className="icon">                    
                        <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href="https://www.linkedin.com/in/tien-nguyen-116374a1/?originalSubdomain=uk";
                                }}
                            >
                                <img className="linklogo" src = {LinkLogo} alt ="LinkLogo"/>
                        </button>
                    </div>
                    <div className="icon">
                        <button
                                className="cv-button"
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.open(Cv);
                                }}
                            >
                                <img className="linklogo" src={CvLogo} alt ="CvLogo"/>
                        </button>
                    </div>
                </div>
                <div className="border-image">
                    <img className="profile-pic" src={ProfilePic} alt="profilepic" />            
                </div>
                <div className="content">
                    <p>
                        As a born and bred Londoner, i do love a cuppa. With a degree in Software Engineering. 
                        I'm passionate about games and a bit of coding development.
                    </p>
                    <p>
                        I regularly play badminton weekly as i feel in this day and age physical fitness is key. 
                        Main weakness:I get nervous when speaking in front of large groups.
                    </p>
                    <p>
                        Random Fact:Been playing League of legends since 2010.
                    </p>
                    <p>
                        Hobbies : Photography Drinking, Green Tea
                    </p>
                </div>
                <div className="time-line">
                    <button
                        onClick={(e) => {
                            this.fetchUpdateTimeLine();
                        }}
                    >
                        {this.state.direction ? <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon> : <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>}</button>
                    <VerticalTimeline>
                        {
                            this.state.timeline.map((item)=> {
                                
                                return (
                                    <VerticalTimelineElement
                                        key={item.id}
                                        className="vertical-timeline-element--work"
                                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                        date="2011 - present"
                                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                        icon={item.icon === "work" ? <FontAwesomeIcon icon={faLaptopHouse}></FontAwesomeIcon> : <FontAwesomeIcon icon={faSchool}></FontAwesomeIcon>}
                                    >
                                        <h3 className="vertical-timeline-element-title">{item.title}</h3>
                                        <h5 className="vertical-timeline-element-title">{item.company}</h5>
                                        <h6 className="vertical-timeline-element-title">{item.duration}</h6>
                                        <p>{item.description}</p>
                                    </VerticalTimelineElement>
                                )
                            })
                        }  
                    </VerticalTimeline>   
                </div>               
            </div>
        </div>
    )}
}

export default Home;