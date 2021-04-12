import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import Scenario from './Scenario';
import { loadScenarios } from '../../actions/scenarios';

const Scenarios = (props) => {
  useEffect(() => {
    loadScenarios();
  }, []);
  
  return(
    <div className="content-container">
      <Container maxWidth="lg" className="scenarios">
        <List>
          {
            props.scenarios.map((scenario) => {
              return <Scenario key={scenario.id} {...scenario} />;
            })
          }
        </List>
      </Container>
    </div>
)};

const mapStateToProps = (state) => {
  return {
    scenarios: state.scenarios
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadScenarios: (type, data) => dispatch(loadScenarios(type, data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scenarios);