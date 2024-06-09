using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CharacterControl : MonoBehaviour {
    private int state = 0; // Aktueller Zustand des Charakters
    private int currState = 0; // Vorheriger Zustand des Charakters
    public float speed = 5f;

    void OnAnimatorMove() {
        Vector3 newPosition = transform.position;
        if (Input.GetKey("w")) {
            newPosition.z += speed * Time.deltaTime;
            currState = 0;
        }
        if (Input.GetKey("s")) {
            newPosition.z -= speed * Time.deltaTime;
            currState = 2;
        }
        if (Input.GetKey("a")) {
            newPosition.x -= speed * Time.deltaTime;
            currState = 3;
        }
        if (Input.GetKey("d")) {
            newPosition.x += speed * Time.deltaTime;
            currState = 1;
        }
        int rotateValue = (currState - state) * 90;
        transform.position = newPosition;
        transform.Rotate(Vector3.up, rotateValue); // Charakter drehen
        state = currState;
    }
}
