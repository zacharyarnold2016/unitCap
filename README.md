Purpose: Easily create SQF script for Unit Capture recordings.

<h1>Guide</h1>

<h2>In Game</h2>

<ol>

   <li>Select the unit you'd like to record (Unit Capture is less effective with infantry, So try to prioritize Vehicles)</li>

   <li>Provide unit with variable name. lowercase works best.</li>

   <li>Create a recording trigger. I typically use Radio Alpha.</li>

   <li>In the Triggers coding block input

```
[variableName, 50, 30, true, 10] spawn BIS_fnc_unitCapture;]]
// varName, recordLength, frameRate, trackFireData?, buffer
```

   </li>

   <li>Create a second trigger. this trigger will play the events. in the coding block write

```
name engineOn true
[]execVM "filename.ext" // Executes Script.
```

   </li>

   <li>Trigger recording trigger (Alpha in this example, by pressing 0-0-1) and do your recording.</li>

   <li>When you finish recording hit Escape, and then Escape again. Your vehicle should be frozen in play.</li>

   <li>Press F1. This will copy the movement data to your devices clipboard.</li>

   <h2>In App</h2>

   <li>Start program and open a browser to http://localhost:3000/api<li>

   <li>in the name category, write the exact variable name of you've used for your unit.</li>

   <li>in the move category, paste your clipboard contents.</li>

   <li>[optional] to get firing tracking go back into game and hit escape twice again.</li>

   <li>[optional] click F2 this time. this will copy the firing content onto your clipboard.</li>

   <li>paste clipboard contents into Pew</li>

   <li>Submit.</li>

   <li>Drag and drop file into Mission File.</li>

</ol>

<h2>Finally</h2>

Remember that Second Trigger we made? Now you can activate that trigger. Your recording should play once the amount of time you set up as your buffer has passed.

```
[variableName, 50, 30, true, 10] spawn BIS_fnc_unitCapture;]]
```

In this case the variable will be recorded for 50 seconds at a refresh rate of 30 per second, track firing data, When the code is triggered the recording will execute after 10 seconds.

<h1>To Do List</h1>

<ul>
   <li>Apply Validation for post method: Bare Minimum Done</li>
   <li>Better Interface</li>
   <li>Prevent Duplicate Post Requests</li>
   <li>Error Handling and Redirects</li>
   <li>Drink More Water</li>
</ul>
