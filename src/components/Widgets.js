import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
// You may need to import FontAwesome icons from '@fortawesome/react-native-fontawesome' separately
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// Import images
import Profile1 from ""
import ProfileCover from "../assets/img/profile-cover.jpg";
// You may need to import Chart components separately or create equivalents in React Native

export const ProfileCardWidget = () => {
  return (
    <View style={styles.card}>
      <Image source={ProfileCover} style={styles.profileCover} />
      <View style={styles.cardBody}>
        <Image source={Profile1} style={styles.profileImage} />
        <Text style={styles.name}>Neil Sims</Text>
        <Text style={styles.subtitle}>Senior Software Engineer</Text>
        <Text style={styles.text}>New York, USA</Text>
        <TouchableOpacity style={styles.button}>
          <FontAwesomeIcon icon={faUserPlus} style={styles.icon} />
          <Text style={styles.buttonText}>Connect</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const ChoosePhotoWidget = (props) => {
  const { title, photo } = props;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.photoContainer}>
        <Image source={photo} style={styles.photo} />
        <View style={styles.fileField}>
          <FontAwesomeIcon icon={faPaperclip} style={styles.paperclipIcon} />
          <Text style={styles.fileFieldText}>Choose Image</Text>
          <Text style={styles.fileFieldDescription}>JPG, GIF or PNG. Max size of 800K</Text>
        </View>
      </View>
    </View>
  );
};

// Define styles
const styles = {
  card: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 8,
    marginBottom: 16,
  },
  profileCover: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardBody: {
    padding: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 16,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    paddingVertical: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  secondaryButton: {
    backgroundColor: "lightblue",
  },
  buttonText: {
    color: "white",
    marginLeft: 4,
  },
  photoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  fileField: {
    marginLeft: 16,
  },
  paperclipIcon: {
    color: "gray",
  },
  fileFieldText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  fileFieldDescription: {
    fontSize: 12,
    color: "gray",
  },
};

// Repeat the same pattern for other components
