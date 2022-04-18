/*
  Much of this code was inspired by this Marius Reimer's article here: https://reime005.medium.com/simple-settings-list-in-react-native-f37109f9f7c5
*/

import * as React from "react";
import { SectionList } from "react-native";
import SettingsListItem from "../../components/settings/SettingsListItem";
import SettingsListSectionHeader from "../../components/settings/SettingsListSectionHeader";
import colours from "../../styles/colours";
import { RootTabScreenProps } from "../../types";

export type Setting = {
  title: string;
  route: "Disconnect" | "Logout" | "VehicleInformation" | "TypePressures";
};

export type SettingsGroup = {
  title: string;
  data: Setting[];
};

export const settingsData: SettingsGroup[] = [
  // {
  //   title: "Vehicle",
  //   data: [
  //     {
  //       title: "Type pressures",
  //       route: "TypePressures",
  //     },
  //     {
  //       title: "Vehicle information",
  //       route: "VehicleInformation",
  //     },
  //   ],
  // },
  {
    title: "Leave",
    data: [
      {
        title: "Logout",
        route: "Logout",
      },
      {
        title: "Disconnect vehicle",
        route: "Disconnect",
      },
    ],
  },
];

const SettingsScreen = ({ navigation }: RootTabScreenProps<"Settings">) => {
  const renderItem = (props: {
    item: Setting;
    index: number;
    section: { data: unknown[] };
  }) => {
    const { index, section, item } = props;
    const isFirstElement = index === 0;
    const isLastElement = index === section.data.length - 1;

    return (
      <SettingsListItem
        item={item}
        isFirstElement={isFirstElement}
        isLastElement={isLastElement}
        navigation={navigation}
      />
    );
  };

  const renderSectionHeader = ({ section }: { section: SettingsGroup }) => {
    const { title } = section;
    return <SettingsListSectionHeader title={title} />;
  };

  return (
    <SectionList
      sections={settingsData}
      style={{ flex: 1, width: "100%", backgroundColor: colours.white }}
      keyExtractor={(item) => item.title}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
    />
  );
};

export default SettingsScreen;
