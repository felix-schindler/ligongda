using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SwitchMode : MonoBehaviour
{
    public GameObject boat;
    public GameObject boatCamera;
    public GameObject player;
    public GameObject playerStartPos;

    // Update is called one per frame
    private void Update()
    {
        var something = false;

        if (Input.GetKey("1"))
        {
            boat.GetComponent<Rigidbody>().isKinematic = something;
            boat.GetComponent<boat>().enabled = true;
            boatCamera.SetActive(true);
            
            player.SetActive(something);
        }
        
        else if (Input.GetKey("2"))
        {
            boat.GetComponent<Rigidbody>().isKinematic = something;
            boat.GetComponent<boat>().enabled = false;
            boatCamera.SetActive(false);
            
            player.SetActive(something);
            player.transform.position = playerStartPos.transform.position;
        }
    }
}
