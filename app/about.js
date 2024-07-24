import { Pressable, ScrollView, Text } from "react-native";
import { Link } from "expo-router";
import { HomeIcon } from "../components/icons";
export default function About() {
  return (
    <ScrollView className="pt-24">
      <Link asChild href="/">
        <Pressable>
          <HomeIcon />
        </Pressable>
      </Link>
      <Text className="text-white font-bold mb-8 text-2xl">
        Sobre el proyecto
      </Text>
      <Text className="text-white text-white/90 mb-4">
        daklsjdklasjdlkajsdkjalskjdaklsjdklasjdlkasjdlkajsdlkjasdlkjaslkdjalksdjlkasjdlkasjdlaksjdklasjd
      </Text>
      <Text className="text-white text-white/90 mb-4">
        daklsjdklasjdlkajsdkjalskjdaklsjdklasjdlkasjdlkajsdlkjasdlkjaslkdjalksdjlkasjdlkasjdlaksjdklasjd
      </Text>

      <Text className="text-white text-white/90 mb-4">
        daklsjdklasjdlkajsdkjalskjdaklsjdklasjdlkasjdlkajsdlkjasdlkjaslkdjalksdjlkasjdlkasjdlaksjdklasjd
      </Text>

      <Text className="text-white text-white/90 mb-4">
        daklsjdklasjdlkajsdkjalskjdaklsjdklasjdlkasjdlkajsdlkjasdlkjaslkdjalksdjlkasjdlkasjdlaksjdklasjd
      </Text>

      <Text className="text-white text-white/90 mb-4">
        daklsjdklasjdlkajsdkjalskjdaklsjdklasjdlkasjdlkajsdlkjasdlkjaslkdjalksdjlkasjdlkasjdlaksjdklasjd
      </Text>

      <Text className="text-white text-white/90 mb-4">
        daklsjdklasjdlkajsdkjalskjdaklsjdklasjdlkasjdlkajsdlkjasdlkjaslkdjalksdjlkasjdlkasjdlaksjdklasjd
      </Text>

      <Text className="text-white text-white/90 mb-4">
        daklsjdklasjdlkajsdkjalskjdaklsjdklasjdlkasjdlkajsdlkjasdlkjaslkdjalksdjlkasjdlkasjdlaksjdklasjd
      </Text>
    </ScrollView>
  );
}
