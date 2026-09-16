sequenceDiagram
    participant browser
    participant server

    Note right of browser: User types a note and clicks "Save"
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note (Form Data)
    activate server
    server-->>browser: 302 Redirect to /notes
    deactivate server

    Note right of browser: Browser follows the redirect, causing a full page reload
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: Browser executes JS, which fetches the updated data
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "New note", "date": "2023-10-25" }, ... ]
    deactivate server

    Note right of browser: Browser executes callback to render the updated notes list