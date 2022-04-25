import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DrawerActions } from "@react-navigation/native";
import { useNavigate } from "react-router";
import SafeAreaView from 'react-native-safe-area-view';
import MockedNavigator from './../../../MockedNavigator';
import Result from './../Result';

describe("<Result />", () => {
    test("renders without crashing", ()=>{
        <MockedNavigator>
            render(<Result />);
        </MockedNavigator>
    })
})