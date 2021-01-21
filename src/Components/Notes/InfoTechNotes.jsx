import React from "react";

function InfoTechNotes() {
  const noteStyle = {
    marginTop: "30px",
  };

  const noteStyleV2 = {
    marginTop: "70px",
    textAlign: "center",
    marginBottom: "30px",
  };

  return (
    <>
      <div>
        <ul>
          <div style={noteStyleV2}>
            <b>Information Technology</b>
          </div>
          <p>
            <u>Bus Architecture</u>
          </p>
          <li>
            Computers transmit data using electrical signals and processes and
            store it using components called transistors and capacitors. An
            electrical pathway on the motherboard or through cabling that
            carries the signals is referred to as a <b>bus</b>. Physically, a
            bus is implemented on the motherboard as tiny wires (called{" "}
            <b>traces</b>) running between components.{" "}
            <b>
              The bus carries information being processed by the computer (data)
              and information about where the data is located in memory
              (address). The bus also carries power to a component and the
              timing signals that synchronize data transfers between components.
            </b>
          </li>
          <li>
            An internal bus, or <b>local bus</b>, connects core components, such
            as the CPU memory, and system controllers.
          </li>
          <li>
            An external bus, or <b>expansion bus</b>, allows additional
            components to be connected to the computer. These components could
            be peripheral devices (located outside the case) or adapter cards
            (located inside the case).
          </li>
          <p style={noteStyle}>
            <u>Expansion Slots</u>
          </p>
          <li>
            Enable the user to install plug-in adapter cards in a computer to
            extend the range of functions it can perform.
          </li>
          <li>
            A computer can support more than one type of expansion bus. An
            example of a multi bus design would be having support for PCI and
            PCI express for adding internal adapter cards, plus USB to allow for
            connection of peripherals.
          </li>
          <li>
            Riser Cards are used in cases that don't have enough space for a
            normal full height expansion card. Utilizing a riser card on these
            smaller cases allows for the user to connect additional adapters to
            the system to save more space.
          </li>
          <p style={noteStyle}>
            <u>System Clock</u>
          </p>
          <li>
            System clock synchronizes the operation of all parts of the PC and
            provides the basic timing signal for the CPU.
          </li>
          <li>
            Clock speeds are measured in Megahurtz (MHz) or Gigahertz (GHz).
          </li>
          <li>
            The clock consists of a clock generator thats sets up a timing
            signal and clock multipliers that take the timing signal produced by
            the generator and apply a multiplication factor to produce different
            timing signals for different types of buses. (This means that one
            type of bus can work at a different speed or frequenct to another
            type of bus)
          </li>
          <p style={noteStyle}>
            <u>Jumper</u>
          </p>
          <li>
            A small plastic clip containing metal conductor the fits over to
            contacts on the motherboard.
          </li>
          <li>
            There may be a motherboard reset jumper. Setting this may allow you
            to restore the system from a failed firmware update, forgotten
            system supervisor password, and so on.
          </li>
          <p style={noteStyle}>
            <u>Interfaces, Ports, and Connections</u>
          </p>
          <li>
            <b>Interface</b> is the point at which two devices connect and
            communicate with each other.
          </li>
          <li>
            <b>Port</b> is a hardware interface that you can use to connect
            devices to a computer. The port can also be referred to as an
            endpoint.
          </li>
          <li>
            Ports transfer electronic signals between the device and the system
            unit. Either an electronically wired socket or plug, or a wireless
            transmission device. Exist for both internal and external devices.
          </li>
          <li>
            Connections are the physical access points that enable a computer to
            communicate with internal or external devices. Includes ports,
            transmissions mediums (cables with connectors), or wireless
            technology.
          </li>
          <li>
            Ports are male, meaning they have pin connectors, females have the
            hole connectors.
          </li>
          <p style={noteStyle}>
            <u>What are tables and fields?</u>
          </p>
          <li>
            Tables are used to store data about a particular subject, such as
            employees or products.
          </li>
          <li>
            The table contain records(rows) and fields(columns). The columns
            cotain different types of data that uses information provided to
            store in that specific field name.
          </li>
        </ul>
      </div>
    </>
  );
}

export default InfoTechNotes;
