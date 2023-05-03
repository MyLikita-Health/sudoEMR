import React, { useState } from 'react';
import { CornerDialog } from 'evergreen-ui/commonjs/corner-dialog';


function CornerAlert () {
  // const [alertState, setAlertState] = useState(false)
  const [isShown, setShow] = useState(true)
  return (
    <>
      <CornerDialog
        title="Welcome to this new feature"
        isShown={isShown}
        onCloseComplete={() => setShow(false)}
      >
        The corner dialog component is used for new feature announcements
        and feedback requests from the user.
      </CornerDialog>
      {/* <Button onClick={() => setShow(true)}>
        Show “Learn More” Corner Dialog
      </Button> */}
    </>
  )
}

export default CornerAlert;