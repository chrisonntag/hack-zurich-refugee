import React, { Component } from 'react';
import {
  Text,
  View,
  TabBarIOS
} from 'react-native';
import AskQuestionView from './AskQuestionView'
import PopularQuestionsView from './PopularQuestionsView'

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'ask'
    };
  }

  render() {
    return (
      <TabBarIOS
        selectedTab={this.state.selectedTab}
        barTintColor="rgb(125, 126, 79)"
        unselectedTintColor="#fff"
      >
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'ask'}
          systemIcon="search"
          title="Ask a question"
          onPress={() => {
              this.setState({
                  selectedTab: 'ask',
              });
          }}>
            <AskQuestionView groupId={this.props.groupId} />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'popular'}
          systemIcon="featured"
          title="Popular Questions"
          onPress={() => {
                this.setState({
                    selectedTab: 'popular',
                });
          }}>
          <PopularQuestionsView groupId={this.props.groupId} />
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}
