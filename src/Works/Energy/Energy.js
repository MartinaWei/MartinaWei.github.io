import React, { Component } from 'react';
import styled from 'styled-components';
import {
    Container,
    Section,
    Divider
} from '../Template';
import M1 from './M1/M1.js';


class Energy extends Component {

    render() {
        return (
            <Container>
                <h1>Energy Analysis</h1>
                <Section>
                    <h2>Building Cunsumption Analysis (2017)</h2>
                    <p style={{width: '70%'}}>
                        To encourage users to take part in the demand pricing market, demand side management is a key component to be successful. Generally speaking, in the demand pricing market, only if the users or administers have confidence in the next few hours, do they assess electricity consumption and the cost of unloading electricity. Normally, the administers estimate electricity consumption by the average usage of the historical data. However, averaging historical data could just serve as a rough estimate. Thus, high resolution of prediction of short-term energy consumption is one of indispensable features for demand side control.
                    </p>
                </Section>

                <Section>
                    <h2>Personal Project</h2>
                    <p style={{width: '70%'}}>
                        This is a personal project and get domain knowledge of HVAC system from technicants and administrators of the commercial building.
                    </p>
                </Section>

                <Section>
                    <h2>Skill</h2>
                    <p>Machine Learning, Data Visualization, Feature Extraction</p>
                </Section>

                <Section>
                    <h2>Methodology I /  Methodology II</h2>

                    <M1/>
                </Section>


            </Container>
        );
    }

}

export default Energy;
