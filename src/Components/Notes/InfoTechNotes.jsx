import React from "react";
//import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function InfoTechNotes() {
  const listPaddingTop = {
    paddingTop: "20px",
  };

  //const decoratedOnClick = useAccordionToggle(eventKey, onClick);

  return (
    <>
      <div>
        <Accordion>
          <Card className="Computer Hardware">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Computer Hardware
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul>
                  <li style={listPaddingTop}>
                    <b>Ports</b> Connection points that we connect devices to
                    that extend the capability of our computer.
                  </li>
                  <li style={listPaddingTop}>
                    <b>Hard Drives</b> Holds all of our data. <i>Long Term</i>
                  </li>
                  <li style={listPaddingTop}>
                    <b>Motherboard</b> The body or circulatory system of the
                    computer that connects all the pieces together.
                  </li>
                  <li style={listPaddingTop}>
                    <b>Central Processing Unit (CPU)</b> The brain of our
                    computer, it does all of the calculations and data
                    processing. The CPU has an internal clock that keep its
                    operations in sync. Data is sent to keep the clock wire in
                    the form of a voltage to let the CPU know when to start
                    working. Like the ticking of a clock. For every tick of the
                    clock the CPU does one cycle of operations, when a voltage
                    is sent it is called a cycle of operations. The more data
                    that you need to process in a command the more clock cycles
                    you need. Has it's own instruction set which is just a list
                    of instructions that the CPU is able to run. Note: Dual core
                    processors allow the cpu to run more efficiently by having
                    double the processing power. Hyperthreading can even double
                    that.
                  </li>
                  <li style={listPaddingTop}>
                    <b>Random Access Memory (RAM)</b> Our computers short-term
                    memory. Stores temporary data for quick use.
                  </li>
                  <li style={listPaddingTop}>
                    <b>Power Supply</b> Converts electricity from our wall
                    outlet into a format our computer can use.
                  </li>
                  <li style={listPaddingTop}>
                    <b>Programs</b> Basic Instructions that tell the computer
                    what to do. Are stored in the hard drive and RAM. Programs
                    used in RAM are much more quickly accessable due to that
                    part of the program being ready to go when sitting in the
                    RAM.
                  </li>
                  <li style={listPaddingTop}>
                    <b>External Data Bus (EDB)</b> A row of wires that
                    interconnect the parts of our computer Like the veins in our
                    body. Sizes: 8 bit, 16 bit, 32 bit, 64 bit (The number of
                    bits equals the number of wires. If the state of the wire is
                    off it's 0, and 1 for on.)
                  </li>
                  <li style={listPaddingTop}>
                    <b>Registers</b> Components inside of the CPU that allow the
                    CPU to store data to work with. If the CPU was working with
                    two numbers, one number would be stored in register "A"
                    another in register "B" the result of both would be held in
                    register "C".
                  </li>
                  <li style={listPaddingTop}>
                    <b>Memory Controller Chip (MCC)</b> The bridge between the
                    CPU and RAM. The CPU will tell the MCC what it needs from
                    the specified data held in the RAM. It will then send this
                    data through the EDB to the CPU.
                  </li>
                  <li style={listPaddingTop}>
                    <b>Cache</b> Smaller than RAM, but let's us store data that
                    we use often. (3 levels of Cache; 1,2,3 smallest being the
                    fastest)
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion>
          <Card className="ComputerNetworks">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Computer Networks
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul>
                  <li style={listPaddingTop}>
                    <b>Local Area Network (LAN)</b>
                    is a self-contained network that spans a small area such as
                    a single floor or a small building. Cabling can generally
                    connect all nodes in a LAN. A Local Area Network (LAN)
                    router divides the network into multiple networks. This is
                    useful for security and performance reasons.
                  </li>
                  <li style={listPaddingTop}>
                    <b>Modem</b>
                    job is to translate analog signals into digital signals-and
                    digital signals into analog signals. Analog is a smooth and
                    continous signal that represents physical measurements
                    (Colors we see, heat we feel, sounds we makes and hear).
                    Digital signals are time separated signals which are
                    generated using digital modulation. Digital uses 0 and 1 to
                    represent information Up/On is 1 and 0 is down/off.
                  </li>
                  <li style={listPaddingTop}>
                    <b>Router</b>
                    can forward or "route" data between logical networks
                  </li>
                  <li style={listPaddingTop}>
                    <b>Virtual Private Network (VPN)</b> is a secure tunnel
                    through the public Internet that connects a remote user with
                    a network.
                  </li>
                  <li style={listPaddingTop}>
                    <b>Wide Area Network (WAN)</b> connects geographically
                    diverse users using long-range transmission media. A WAN
                    typically connects multiple LANs. A Wide Area Network (WAN)
                    joins a network using one type of media with a network using
                    another type of media. An example is to join a LAN to a WAN,
                    such as the Internet.
                  </li>
                  <li style={listPaddingTop}>
                    <b>Personal Area Network (PAN)</b> is a relatively new
                    concept that refers to using wireless connectivity devices
                    within a few meters.
                  </li>
                  <li style={listPaddingTop}>
                    A Domain Name System (DNS) server translates Fully Qualified
                    Domain Names (FQDNs) into Internet Protocol (IP) addresses.
                    This makes network services available by allowing users to
                    access resources on the network using the FQDN.
                  </li>
                  <li style={listPaddingTop}>
                    <b>Ethernet Switch</b> replaces the functions of both a hub
                    and a bridge on modern networks. Switches connect nodes
                    together into a single network. The switch establishes a
                    point-to-point link between any two nodes in a network.
                  </li>
                  <li style={listPaddingTop}>
                    <b>Hub</b> an early type of device used to implement the
                    Ethernet cabling design referred to as a star topology. A
                    hub is a multiport repeater.
                  </li>
                  <li style={listPaddingTop}>
                    <b>Router</b> is responsible for moving data around a
                    network of networks, known as an internetwork or internet. A
                    router forwards packets over the network, whereas a switch
                    forwards frames.
                  </li>
                  <li style={listPaddingTop}>
                    <b>Registers</b> Components inside of the CPU that allow the
                    CPU to store data to work with. If the CPU was working with
                    two numbers, one number would be stored in register "A"
                    another in register "B" the result of both would be held in
                    register "C".
                  </li>
                  <li style={listPaddingTop}>
                    <b>Memory Controller Chip (MCC)</b> The bridge between the
                    CPU and RAM. The CPU will tell the MCC what it needs from
                    the specified data held in the RAM. It will then send this
                    data through the EDB to the CPU.
                  </li>
                  <li style={listPaddingTop}>
                    <b>Cache</b> Smaller than RAM, but let's us store data that
                    we use often. (3 levels of Cache; 1,2,3 smallest being the
                    fastest)
                  </li>
                  <li style={listPaddingTop}>
                    <b>Global System for Mobile Communication (GSM)</b> works
                    with a Subscriber Identification Module (SIM) to contain the
                    inofrmation needed to connect to the newwork.
                  </li>
                  <li style={listPaddingTop}>
                    <b>Code Division Multiple Access (CMDA)</b> Locks the
                    hansdset to the original provider and does require a SIM
                    card.
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion>
          <Card className="BIOS">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                BIOS
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul>
                  <li style={listPaddingTop}>
                    The software used to start your computer (firmware).
                  </li>
                  <li style={listPaddingTop}>
                    Accessed by hitting the Del, F1, F2, Crtl-S, or Ctrl-Alt-S
                    keys during PC start up. (Depends on Motherboard)
                  </li>
                  <li style={listPaddingTop}>
                    Initialzes CPU and memory, and builds the workspace.
                  </li>
                  <li style={listPaddingTop}>
                    Power-On-Self-Test (POST) Will check for CPU and memory,
                    look for display and keyboad etc. Looks for hardware
                    connected. Once finished it looks for bootloaded on storage
                    device to launch OS.
                  </li>
                  <li style={listPaddingTop}>
                    Your BIOS can also help provide Full Disk Encryption on your
                    computer. This is sometimes referred to as FDE, where
                    everything that is written onto a disk, including the
                    operating system, is completely encrypted. If someone gained
                    access to one of your devices or tried to read information
                    from your storage devices, they would find that all of that
                    information was encrypted.
                  </li>
                  <li style={listPaddingTop}>
                    In Windows, this full-disk encryption is called BitLocker.
                    And BitLocker integrates with a TPM. This is a Trusted
                    Platform Module. It’s a piece of hardware that’s inside of
                    your computer, maybe a module that you add to a motherboard,
                    or it might be built into the motherboard that you’re using.
                    This TPM has a random number generator.
                  </li>
                  <li style={listPaddingTop}>
                    It can help create cryptographic keys. And it has a number
                    of other advanced cryptographic functions. This TPM
                    integrates with the BIOS to provide the highest level of
                    security for your data.
                  </li>
                </ul>
                <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                  <div style={{ paddingTop: "20px" }}>
                    <Accordion>
                      <Card className="ConfigurationComponentInformation">
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            Configuration Component Information
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <ul style={listPaddingTop}>
                              <li>
                                In the BIOS you can see memory that you have
                                installed, the RAM modules. You’re able to view
                                the memory modules that you’ve installed in your
                                system. And you can confirm that the memory
                                modules that are physically installed are able
                                to be seen by the BIOS.
                              </li>
                              <li>
                                The BIOS can also tell you if you have installed
                                a hard drive or an SSD into this computer and
                                allows you to make changes as to which one of
                                these devices will be used in what order during
                                the boot process. The BIOS will also tell you if
                                you have an optical drive installed, such as a
                                CD Rom or a DVD Rom, and allows you to enable or
                                disable that hardware. And of course, it will
                                give you information about the CPU that’s
                                installed in that system and tell you what type
                                of CPU settings are configured in the BIOS
                              </li>
                              <li>
                                Limited harware support, no drivers for modern
                                network, video, and storage drivers.
                              </li>
                            </ul>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  <Accordion>
                    <Card className="LegacyBIOS">
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="0"
                        >
                          Legacy BIOS
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <ul style={listPaddingTop}>
                            <li>Has been around for 25 years +</li>
                            <li>
                              Older opertaing systems talked to hardware through
                              BIOS instead of accessing hardware directly.
                            </li>
                            <li>
                              Limited harware support, no drivers for modern
                              network, video, and storage drivers.
                            </li>
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                  <Accordion>
                    <Card className="UEFIBIOS">
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="0"
                        >
                          Unified Extensible Firmware Interface (UEFI) BIOS
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <ul style={listPaddingTop}>
                            <li>Based on Intel's EFI BIOS</li>
                            <li>
                              A defined standard today, and is implemented by
                              all manufactures instead of everyone making their
                              own BIOS
                            </li>
                            <li>
                              Includes a pre-boot environment. Which is not a
                              OS, it has it's own shell, drivers and
                              applications. Be able to browse the internet, back
                              up a storage device. Remote diagnostics even
                              without an OS
                            </li>
                            <li>
                              Option for text based or graphical front end.
                            </li>
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

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
                  <li style={listPaddingTop}>
                    Enable the user to install plug-in adapter cards in a
                    computer to extend the range of functions it can perform.
                  </li>
                  <li style={listPaddingTop}>
                    A computer can support more than one type of expansion bus.
                    An example of a multi bus design would be having support for
                    PCI and PCI express for adding internal adapter cards, plus
                    USB to allow for connection of peripherals.
                  </li>
                  <li style={listPaddingTop}>
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
                  <li style={listPaddingTop}>
                    System clock synchronizes the operation of all parts of the
                    PC and provides the basic timing signal for the CPU.
                  </li>
                  <li style={listPaddingTop}>
                    Clock speeds are measured in Megahurtz (MHz) or Gigahertz
                    (GHz).
                  </li>
                  <li style={listPaddingTop}>
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
                  <li style={listPaddingTop}>
                    A small plastic clip containing metal conductor the fits
                    over to contacts on the motherboard.
                  </li>
                  <li style={listPaddingTop}>
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
                  <li style={listPaddingTop}>
                    <b>Interface</b> is the point at which two devices connect
                    and communicate with each other.
                  </li>
                  <li style={listPaddingTop}>
                    <b>Port</b> is a hardware interface that you can use to
                    connect devices to a computer. The port can also be referred
                    to as an endpoint.
                  </li>
                  <li style={listPaddingTop}>
                    Ports transfer electronic signals between the device and the
                    system unit. Either an electronically wired socket or plug,
                    or a wireless transmission device. Exist for both internal
                    and external devices.
                  </li>
                  <li style={listPaddingTop}>
                    <b>Connections</b> are the physical access points that
                    enable a computer to communicate with internal or external
                    devices. Includes ports, transmissions mediums (cables with
                    connectors), or wireless technology.
                  </li>
                  <li style={listPaddingTop}>
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
                  <li style={listPaddingTop}>
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
                  <li style={listPaddingTop}>
                    Extends functionality (More than the base motherboard
                    provides)
                  </li>
                  <li style={listPaddingTop}>
                    Cards for audio, video, Network cards, Multi-port Ethernet
                    card, USB connections, Storage Cards, eSata Card.
                  </li>
                  <li style={listPaddingTop}>
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
                  <li style={listPaddingTop}>Checking cords are plugged in</li>
                  <li style={listPaddingTop}>Input Selection</li>
                  <li style={listPaddingTop}>
                    Image is Dim, check Brightness controls
                  </li>
                  <li style={listPaddingTop}>Swap Monitor</li>
                  <li style={listPaddingTop}>
                    No video after windows loads, press F8
                  </li>
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
                  <li style={listPaddingTop}>Check the cable pins</li>
                  <li style={listPaddingTop}>Disable hardware acceleration.</li>
                  <li style={listPaddingTop}>
                    Resolution set too low = larger
                  </li>
                  <li style={listPaddingTop}>
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
                  <li style={listPaddingTop}>
                    Random Access Memory (RAM), volitile, loses memory when
                    powered off. Data and programs can only be used when moved
                    to RAM. Goes back to SSD or HD when finished.
                  </li>
                  <li style={listPaddingTop}>
                    The faster the memory is the faster you computer works with
                    information.
                  </li>
                  <li style={listPaddingTop}>
                    Dual Inline Memory Module (DIMM) There are split contacts on
                    each side of the module. They have a 64-bit data width.
                  </li>
                  <li style={listPaddingTop}>
                    Small Outline Dual In-Line Memory Module (SO-DIMM) are about
                    half the width of the standard DIMM desktop computer.
                    Usually used in laptops or mobile devices.
                  </li>
                  <li style={listPaddingTop}>
                    The RAM DIMM is called DRAM or Dynamic Random Access Memory.
                    Dynamic means it needs constant refreshing. Without
                    refreshing the data would disappear.
                  </li>
                  <li style={listPaddingTop}>
                    SDRAM or Synchronous DRAM is in sync with the common system
                    clock. It queues up one process while waiting for another.
                    Class DRAM didnt wait for a clock signal.
                  </li>
                  <li style={listPaddingTop}>
                    DDR SDRAM or Dual Date Rate Memory can pull data twice per
                    clock cycle, while SDR SDRAM or Single Data Rate just pulls
                    data one per clock cycle.
                  </li>
                  <li style={listPaddingTop}>
                    DDR2 must be used in DDR2 only. DDR3 has twice data rates
                    with maximum size of 16GB of memory. DDR4 has increase speed
                    and can have up to 64GB of memory per DIMM. None of these
                    are backwards compatible
                  </li>
                  <li style={listPaddingTop}>
                    Can have up to four memory modules to place DIMMs, always
                    make sure they are the same type if you are using multiple
                    slots. Memory modules are often colored differently. Do one
                    color first then the other.
                  </li>
                  <li style={listPaddingTop}>
                    Parity Memory, adds an additional parity bit along with the
                    normal memory being transfered. It can find when errors
                    occur but at the same time won't always detect errors (no
                    reliable), and cannot fix errors on it's own. Looks same as
                    non parity memory. Parity bits make even numbers by checking
                    the byte to see if it's even or odd and will add 1 depending
                    on the byte value.
                  </li>
                  <li style={listPaddingTop}>
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
              <Accordion.Toggle as={Button} variant="link" eventKey="10">
                Flash Memory
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="10">
              <Card.Body>
                <ul>
                  <li>
                    Flash memory is a non-volatile memory chip used for storage
                    and for transfering data between a personal computer (PC)
                    and digital devices. It has the ability to be electronically
                    reprogrammed and erased. It is often found in USB flash
                    drives, MP3 players, digital cameras and solid-state drives
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="11">
                The "CMOS" Battery
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="11">
              <Card.Body>
                <ul>
                  <li>
                    Not needed for today's flash-based storage of the BIOS. Used
                    to be used for older BIOS configurations.
                  </li>
                  <li>Now only used to maintain the date/time.</li>
                  <li>
                    If the CMOS battery power begins to run dry the computer
                    will have a hard time mainitaing the date and time without
                    having a source of power.
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <Accordion>
          <Card className="Measurements">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Data Measurements
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul>
                  <li style={listPaddingTop}>
                    <b>bit = b, bit per second = bps</b>
                  </li>
                  <li style={listPaddingTop}>
                    <b>byte = B, byte per second = B/s</b>
                  </li>
                  <li style={listPaddingTop}>
                    <b>Kilobit = Kb, Kilobit per second = Kbps</b>
                  </li>
                  <li style={listPaddingTop}>
                    <b>Kilobyte = MB, Kilobyte per second = KB/s</b>
                  </li>
                  <li style={listPaddingTop}>
                    <b>Megabit = Mb, Megabit per second = Mbps</b>
                  </li>
                  <li style={listPaddingTop}>
                    <b>Megabyte = MB, Megabyte per second = MB/s</b>
                  </li>
                  <li style={listPaddingTop}>
                    <b>Gigabit = Gb, Gigabit per second = Gbps</b>
                  </li>
                  <li style={listPaddingTop}>
                    <b>Gigabyte = GB, Gigabyte per second = GB/s</b>
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion>
          <Card className="Measurements">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Electrical Measurements
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul>
                  <li style={listPaddingTop}>
                    <b>
                      Watts is the rate at which electricity is drawn from the
                      supply
                    </b>
                  </li>
                  <li style={listPaddingTop}>
                    <b>
                      Energy is the amount of power consumed by a device over
                      time measued in Kilowatt-hours.
                    </b>
                  </li>
                  <li style={listPaddingTop}>
                    <b>
                      Voltage (V) is the potential difference between to point
                      measured in volts. Like pressure in a water pipe. More
                      voltage means more flow of electrons which creates more
                      energy for whatever device it's used in.
                    </b>
                  </li>
                  <li style={listPaddingTop}>
                    <b>
                      Energy is the amount of power consumed by a device over
                      time measued in Kilowatt-hours.
                    </b>
                  </li>
                  <li style={listPaddingTop}>
                    <b>
                      Curennt is the flow of electrons. Current is a result of
                      how much voltage is being used.
                    </b>
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion>
          <Card className="Ports">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                TCP Ports
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul>
                  <li style={listPaddingTop}>
                    Port 80 is the TCP (Transport Control Protocol) port used
                    for web pages that use Hyper Text Transfer Protocol. TCP
                    ensures reliable data deliver so that packets arrive error
                    free and without loss.
                  </li>
                  <li style={listPaddingTop}>
                    Port 143 is the TCP port used for imap4 (Internet Mail
                    Access Protocol) enabling a user's email program (Outlook,
                    for example) to access the mail server.
                  </li>
                  <li style={listPaddingTop}>
                    Port 389 is the TCP port use for ldap (Lightweight Directory
                    Access Protocol) which enables the user to locate
                    organizations, individuals, files, and devices in a network.
                  </li>
                  <li style={listPaddingTop}>Https uses TCP port 443.</li>
                  <li style={listPaddingTop}>
                    Port 445 is used for smb (Server Message Block/Common
                    Internet File System).
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion>
          <Card className="Hypervisor">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Hypervisor
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul>
                  <li style={listPaddingTop}>
                    <b>Hypervisor</b>
                    Assigning resources to each guest operating system Emulating
                    and facilitating access to resources like the CPU (Central
                    Processing Unit) and memory for each guest operating system.
                    Configuring security to make sure that guest operating
                    systems cannot access each other except through authorized
                    mechanisms
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
