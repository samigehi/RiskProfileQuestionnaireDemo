import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ResultScreen = ({ navigation, route }) => {
  const { score } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={{ fontSize: 50 }}>Your Risk Profile Assessment is</Text>

        <View style={styles.textWrapper}>
          <Text style={styles.score}>{score}</Text>
          <Text style={styles.score}> / 18</Text> 
        
          <Text style={styles.score}> analyseUser(score)</Text> 
        {/* currently I hardcode 18 as total points for 5 questions - but we can calculate also based on data.points.length */}   
        </View>
        {/* Retry Risk Profile Assessment button */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Welcome");
          }}
          style={styles.btnReset}
        >
          <Text style={styles.btnText}>Retry</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

var analyseUser = function(score) {
  if (score >= 15) {
    return "Expert (Risk Taker)";
  } else if (score >= 10) {
    return "Intermediate";
  }  else {
    return "Beginner! (Safe)";
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38588b",
    alignItems: "center",
    justifyContent: "center",
  },
  subContainer: {
    backgroundColor: "#38588b",
    width: "90%",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  textWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 30,
  },
  score: {
    fontSize: 100,
    color: "#ffffff",
    fontWeight: "bold",
  },
  btnReset: {
    backgroundColor: "#333",
    paddingHorizontal: 5,
    paddingVertical: 15,
    width: "50%",
    borderRadius: 15,
  },
  btnText: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 20,
    letterSpacing: 1,
  },
});
export default ResultScreen;
