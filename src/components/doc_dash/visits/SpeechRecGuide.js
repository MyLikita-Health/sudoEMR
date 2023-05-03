import React from "react";
import { Table } from "reactstrap";
import CollapsibleCard from "../../CollapsibleCard.js";
// import CollapsibleCard from '../../CollapsibleCard'

function SpeechRecognitionGuide() {
  return (
    <CollapsibleCard headerText="Speech Recognition Help">
      <Table size="sm" bordered>
        <thead>
          <tr>
            <th>Say</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Period</td>
            <td className="text-center">.</td>
          </tr>
          <tr>
            <td>Comma</td>
            <td className="text-center">,</td>
          </tr>
          <tr>
            <td>Question mark</td>
            <td className="text-center">?</td>
          </tr>
          <tr>
            <td>Colon</td>
            <td className="text-center">:</td>
          </tr>
          <tr>
            <td>Semi Colon</td>
            <td className="text-center">;</td>
          </tr>
          <tr>
            <td>Exclamation mark, Exclamation point</td>
            <td className="text-center">!</td>
          </tr>
          <tr>
            <td>Dash, Hyphen</td>
            <td className="text-center">-</td>
          </tr>
          <tr>
            <td>New line</td>
            <td className="text-center">↵</td>
          </tr>
          <tr>
            <td>New paragraph</td>
            <td className="text-center">↵↵</td>
          </tr>
          <tr>
            <td>Open parentheses</td>
            <td className="text-center">(</td>
          </tr>
          <tr>
            <td>Close parentheses</td>
            <td className="text-center">)</td>
          </tr>
          <tr>
            <td>Smiley, Smiley face</td>
            <td className="text-center">:-)</td>
          </tr>
          <tr>
            <td>Sad face</td>
            <td className="text-center">:-(</td>
          </tr>
        </tbody>
      </Table>
    </CollapsibleCard>
  );
}

export default SpeechRecognitionGuide;
