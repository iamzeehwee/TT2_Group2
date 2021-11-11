import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import React, { Component } from 'react';
import Constants from '../Constants';

class DashboardSideNav extends Component {
  handleListItemClick = (index) => {
    this.props.setIndex(index)
  };

  render() {
    const styles = {
      sideNav: {
        top: 0,
        height: '100%',
        width: this.props.width,
        borderRight: '1px solid rgba(0, 0, 0, 0.12)',
        position: 'fixed',
        overflowY: 'auto',
        background: 'white',
        zIndex: '8'
      },
      navBar: {
        minHeight: '150px'
      }
    };

    return (
      <>
        <div style={styles.sideNav}>
          <div style={styles.navBar} />
          <ListSubheader>
              {'Projects'}
            </ListSubheader>
          {this.props.projects.map((proj, index) =>
          <React.Fragment key={index}>
              <ListItem
                button
                key={proj.id}
                selected={this.props.selectedProjectIndex === proj.id}
                onClick={() => this.handleListItemClick(proj.id)}
              >
                <ListItemText primary={proj.name} />
              </ListItem>
          </React.Fragment>
        )}
        </div>
      </>
    );
  }
}

export default DashboardSideNav;
