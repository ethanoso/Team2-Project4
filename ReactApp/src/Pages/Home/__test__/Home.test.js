import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DrawerActions } from "@react-navigation/native";
import { useNavigate } from "react-router";
import SafeAreaView from 'react-native-safe-area-view';
import MockedNavigator from './../../../MockedNavigator';
import Home from './../Home';


// const mockedDispatch = jest.fn();


// jest.mock("@react-navigation/native", () => {
//   const actualNav = jest.requireActual("@react-navigation/native");
//   return {
//     ...actualNav,
//     useNavigation: () => ({
//       navigate: jest.fn(),
//       dispatch: mockedDispatch,
//     }),
//   };
// });

describe("<Home />", () => {
    // Clear the mocked navigate feature before each test
    // beforeEach(() => {
    //     mockedDispatch.mockClear();
    // });

    test("renders without crashing", ()=>{
        <MockedNavigator>
            render(<Home />);
        </MockedNavigator>
        // expect(mockedDispatch).toHaveBeenCalledTimes(1);
        // expect(mockedDispatch).toHaveBeenCalledWith(DrawerActions.toggleDrawer());
    })
})
