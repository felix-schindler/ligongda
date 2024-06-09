using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlatformSpawner : MonoBehaviour {
    public GameObject platform;
    private GameObject lastPlatform;
    public float distance = 3f;

    void Start() {
        for (int i = 0; i < 50; i++) {
            SpawnPlatform();
        }
    }

    void SpawnPlatform() {
        int randomNum = Random.Range(0, 2);
        if (randomNum == 0) {
            lastPlatform = Instantiate(platform, new Vector3(lastPlatform.transform.position.x + distance,
                lastPlatform.transform.position.y, lastPlatform.transform.position.z), Quaternion.identity);
        } else {
            lastPlatform = Instantiate(platform, new Vector3(lastPlatform.transform.position.x,
                lastPlatform.transform.position.y, lastPlatform.transform.position.z + distance), Quaternion.identity);
        }
    }
}
