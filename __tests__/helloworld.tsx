import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import "jest";
import "react-native";

import * as renderer from "react-test-renderer";

const Foo = () => {
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};

it("renders all our icons correctly", () => {
  const tree = renderer.create(<Foo />).toJSON();
  expect(tree).toMatchSnapshot();
});
