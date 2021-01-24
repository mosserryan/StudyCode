import React from "react";
//import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function InfoTechNotes() {
  const noteStyle = {
    marginTop: "30px",
  };

  const listPaddingTop = {
    paddingTop: "20px",
  };

  //const decoratedOnClick = useAccordionToggle(eventKey, onClick);

  return (
    <>
      <div>
        <Accordion>
          <Card className="BusArchitecture">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Bus Architecture
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul>
                  <li style={listPaddingTop}>
                    Computers transmit data using electrical signals and
                    processes and store it using components called transistors
                    and capacitors. An electrical pathway on the motherboard or
                    through cabling that carries the signals is referred to as a{" "}
                    <b>bus</b>. Physically, a bus is implemented on the
                    motherboard as tiny wires (called <b>traces</b>) running
                    between components.{" "}
                    <b>
                      The bus carries information being processed by the
                      computer (data) and information about where the data is
                      located in memory (address). The bus also carries power to
                      a component and the timing signals that synchronize data
                      transfers between components.
                    </b>
                  </li>
                  <li style={listPaddingTop}>
                    An internal bus, or <b>local bus</b>, connects core
                    components, such as the CPU memory, and system controllers.
                  </li>
                  <li style={listPaddingTop}>
                    An external bus, or <b>expansion bus</b>, allows additional
                    components to be connected to the computer. These components
                    could be peripheral devices (located outside the case) or
                    adapter cards (located inside the case).
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="ExpansionSlot">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Expansion Slots
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ul>
                  <li>
                    Enable the user to install plug-in adapter cards in a
                    computer to extend the range of functions it can perform.
                  </li>
                  <li>
                    A computer can support more than one type of expansion bus.
                    An example of a multi bus design would be having support for
                    PCI and PCI express for adding internal adapter cards, plus
                    USB to allow for connection of peripherals.
                  </li>
                  <li>
                    Riser Cards are used in cases that don't have enough space
                    for a normal full height expansion card. Utilizing a riser
                    card on these smaller cases allows for the user to connect
                    additional adapters to the system to save more space.
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="SystemClock">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                System Clock
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <ul>
                  <li>
                    System clock synchronizes the operation of all parts of the
                    PC and provides the basic timing signal for the CPU.
                  </li>
                  <li>
                    Clock speeds are measured in Megahurtz (MHz) or Gigahertz
                    (GHz).
                  </li>
                  <li>
                    The clock consists of a clock generator thats sets up a
                    timing signal and clock multipliers that take the timing
                    signal produced by the generator and apply a multiplication
                    factor to produce different timing signals for different
                    types of buses. (This means that one type of bus can work at
                    a different speed or frequenct to another type of bus)
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="Jumper">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                Jumper
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <ul>
                  <li>
                    A small plastic clip containing metal conductor the fits
                    over to contacts on the motherboard.
                  </li>
                  <li>
                    There may be a motherboard reset jumper. Setting this may
                    allow you to restore the system from a failed firmware
                    update, forgotten system supervisor password, and so on.
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="InterfacesPortsConnections">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="4">
                Interfaces, Ports, and Connections
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <ul>
                  <li>
                    <b>Interface</b> is the point at which two devices connect
                    and communicate with each other.
                  </li>
                  <li>
                    <b>Port</b> is a hardware interface that you can use to
                    connect devices to a computer. The port can also be referred
                    to as an endpoint.
                  </li>
                  <li>
                    Ports transfer electronic signals between the device and the
                    system unit. Either an electronically wired socket or plug,
                    or a wireless transmission device. Exist for both internal
                    and external devices.
                  </li>
                  <li>
                    <b>Connections</b> are the physical access points that
                    enable a computer to communicate with internal or external
                    devices. Includes ports, transmissions mediums (cables with
                    connectors), or wireless technology.
                  </li>
                  <li>
                    Ports are male, meaning they have pin connectors, females
                    have the hole connectors.
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="Peripherals">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="5">
                Peripherals
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                <ul>
                  <li>
                    Mouse, Keyboard, VR Headsets, Printers, Signature Pad,
                    Gaming Input (controllers), Webcams, Microphone, Speakers,
                    Headset, Digital Projector, External Storage Device, KVM
                    (Keyboard, Video, Mouse), Magnetic reader/Chip reader, Smart
                    Card Reader.
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="ExpansionCards">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="6">
                Expansion Cards
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="6">
              <Card.Body>
                <ul>
                  <li>
                    Extends functionality (More than the base motherboard
                    provides)
                  </li>
                  <li>
                    Cards for audio, video, Network cards, Multi-port Ethernet
                    card, USB connections, Storage Cards, eSata Card.
                  </li>
                  <li>
                    Always check your motherboard documentation for number and
                    type of slots, as well as minimum requirements. May need to
                    perform a driver installation before installing hardware.
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="VideoImageTroubleShootingProblems">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="7">
                Video Image: Trouble Shooting Problems
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="7">
              <Card.Body>
                <ul>
                  <li>Checking cords are plugged in</li>
                  <li>Input Selection</li>
                  <li>Image is Dim, check Brightness controls</li>
                  <li>Swap Monitor</li>
                  <li>No video after windows loads, press F8</li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="Image Quality: Trouble Shooting Problems">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="8">
                Image Quality: Trouble Shooting Problems
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="8">
              <Card.Body>
                <ul>
                  <li>Check the cable pins</li>
                  <li>Disable hardware acceleration.</li>
                  <li>Resolution set too low = larger</li>
                  <li>
                    <b>Burning</b> or ghosting is when the image from before
                    sticks around.
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="Memory">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="9">
                Memory
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="9">
              <Card.Body>
                <ul>
                  <li>
                    Random Access Memory (RAM), volitile, loses memory when
                    powered off. Data and programs can only be used when moved
                    to RAM. Goes back to SSD or HD when finished.
                  </li>
                  <li>
                    The faster the memory is the faster you computer works with
                    information.
                  </li>
                  <li>
                    Dual Inline Memory Module (DIMM) There are split contacts on
                    each side of the module. They have a 64-bit data width.
                  </li>
                  <li>
                    Small Outline Dual In-Line Memory Module (SO-DIMM) are about
                    half the width of the standard DIMM desktop computer.
                    Usually used in laptops or mobile devices.
                  </li>
                  <li>
                    The RAM DIMM is called DRAM or Dynamic Random Access Memory.
                    Dynamic means it needs constant refreshing. Without
                    refreshing the data would disappear.
                  </li>
                  <li>
                    SDRAM or Synchronous DRAM is in sync with the common system
                    clock. It queues up one process while waiting for another.
                    Class DRAM didnt wait for a clock signal.
                  </li>
                  <li>
                    DDR SDRAM or Dual Date Rate Memory can pull data twice per
                    clock cycle, while SDR SDRAM or Single Data Rate just pulls
                    data one per clock cycle.
                  </li>
                  <li>
                    DDR2 must be used in DDR2 only. DDR3 has twice data rates
                    with maximum size of 16GB of memory. DDR4 has increase speed
                    and can have up to 64GB of memory per DIMM. None of these
                    are backwards compatible
                  </li>
                  <li>
                    Can have up to four memory modules to place DIMMs, always
                    make sure they are the same type if you are using multiple
                    slots. Memory modules are often colored differently. Do one
                    color first then the other.
                  </li>
                  <li>
                    Parity Memory, adds an additional parity bit along with the
                    normal memory being transfered. It can find when errors
                    occur but at the same time won't always detect errors (no
                    reliable), and cannot fix errors on it's own. Looks same as
                    non parity memory. Parity bits make even numbers by checking
                    the byte to see if it's even or odd and will add 1 depending
                    on the byte value.
                  </li>
                  <li>
                    Error Correcting Code (ECC), can detect errors and corrects
                    on the fly. Not all systems use ECC however. It looks the
                    same as non ECC memory.
                  </li>
                  <li>Make sure you know which memory motherboard needs.</li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Expansion Slots
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ul>
                  <li>
                    Enable the user to install plug-in adapter cards in a
                    computer to extend the range of functions it can perform.
                  </li>
                  <li>
                    A computer can support more than one type of expansion bus.
                    An example of a multi bus design would be having support for
                    PCI and PCI express for adding internal adapter cards, plus
                    USB to allow for connection of peripherals.
                  </li>
                  <li>
                    Riser Cards are used in cases that don't have enough space
                    for a normal full height expansion card. Utilizing a riser
                    card on these smaller cases allows for the user to connect
                    additional adapters to the system to save more space.
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Expansion Slots
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ul>
                  <li>
                    Enable the user to install plug-in adapter cards in a
                    computer to extend the range of functions it can perform.
                  </li>
                  <li>
                    A computer can support more than one type of expansion bus.
                    An example of a multi bus design would be having support for
                    PCI and PCI express for adding internal adapter cards, plus
                    USB to allow for connection of peripherals.
                  </li>
                  <li>
                    Riser Cards are used in cases that don't have enough space
                    for a normal full height expansion card. Utilizing a riser
                    card on these smaller cases allows for the user to connect
                    additional adapters to the system to save more space.
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </>
  );
}

export default InfoTechNotes;
