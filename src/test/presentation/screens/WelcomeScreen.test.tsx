import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { shallow, configure } from "enzyme";
import renderer from "react-test-renderer";
import WelcomeScreen from "../../../presentation/screens/WelcomeScreen";
import Adapter from '@cfaester/enzyme-adapter-react-18';

// This is a demonstration of Jest/Unit testing for React Native.
// Here, I've added three test cases to demonstrate how we can use Jest or implement unit testing in our react native app.
// The first test case compares the text header title, the second compares the clickable text title,
// and the third test performs a click event on TouchableOpacity and checks that the next page is our QuestionnairePage or not.

configure({ adapter: new Adapter() })
describe("WelcomeScreen", () => {

  it("Text controller text must be 'Ready For Risk Profile Assessment?' ", () => {
    const navigation = {
      navigate: jest.fn(),
    };
    //const wrapper = shallow(<WelcomeScreen navigation={navigation} />);
    const tree = renderer.create(<WelcomeScreen navigation={navigation} />).toJSON();
    const textComponent = tree.children.find(
      (node) => node.type === Text && node.props.testID === "titleId"
    );
    expect(textComponent.props.children).toBe(
      "Ready For Risk Profile Assessment?"
    );
    
  });

  it("Text controller text must be 'Start Assessment' ", () => {
    const navigation = {
      navigate: jest.fn(),
    };
    //const wrapper = shallow(<WelcomeScreen navigation={navigation} />);
    const tree = renderer.create(<WelcomeScreen navigation={navigation} />).toJSON();
    const textComponent = tree.children.find(
      (node) => node.type === Text && node.props.testID === "buttonId"
    );
    expect(textComponent.props.children).toBe(
      "Start Assessment"
    );
    
  });


  it("should navigate to QuizPage when Start Assessment button is pressed", () => {
    //configure({ adapter: new Adapter() })
    const navigation = {
      navigate: jest.fn(),
    };
    const wrapper = shallow(<WelcomeScreen navigation={navigation} />);
    // Here in our WelcomeScreen, we only have one TouchableOpacity view. If there are multiple TouchableOpacity views, then this logic will fail as it only targets and find the first TouchableOpacity view and simulates or perform a click event on it.
    const startButton = wrapper.find(TouchableOpacity);
    startButton.props().onPress(); // Simulate button press

    expect(navigation.navigate).toHaveBeenCalledWith("Quiz");
    });

    //4th
    it("Text controller text must be 'Ready For Risk Profile Assessment?' alternative ", () => {
        const navigation = {
          navigate: jest.fn(),
        };
        const wrapper = shallow(<WelcomeScreen navigation={navigation} />);
        const textComponent = wrapper.find('[name="titleId"]').render().text()
        //expect(textComponent).toBe('Ready For Risk Profile Assessment?');
        expect(textComponent).toEqual('Ready For Risk Profile Assessment?');
        
      });
    

});