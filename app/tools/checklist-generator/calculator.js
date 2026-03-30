'use client';

import { useState } from 'react';
import ToolGateway from '../../../components/tool-gateway';
import { serializeToolData } from '../../../lib/lead-capture';
import StickyTrialBar from '../../../components/sticky-trial-bar';
import EmailGate from '../../../components/email-gate';

const TEMPLATES = {
  residential_standard: {
    label: 'Residential Standard Clean',
    rooms: {
      Kitchen: [
        'Wipe countertops and backsplash',
        'Clean sink and faucet',
        'Wipe exterior of appliances',
        'Clean microwave inside and out',
        'Sweep and mop floor',
        'Empty trash',
        'Wipe cabinet fronts',
      ],
      Bathroom: [
        'Clean and disinfect toilet',
        'Clean sink and countertop',
        'Clean mirror',
        'Scrub shower/tub',
        'Sweep and mop floor',
        'Replace towels',
        'Empty trash',
      ],
      'Living Room': [
        'Dust all surfaces',
        'Vacuum carpet or mop floor',
        'Wipe light switches and door handles',
        'Straighten cushions and pillows',
        'Dust TV and electronics',
      ],
      Bedroom: [
        'Make bed / change linens',
        'Dust all surfaces',
        'Vacuum or mop floor',
        'Wipe mirrors',
        'Empty trash',
      ],
      Hallway: [
        'Vacuum or mop floor',
        'Dust baseboards',
        'Wipe light switches',
      ],
    },
  },
  residential_deep: {
    label: 'Residential Deep Clean',
    rooms: {
      Kitchen: [
        'Wipe countertops and backsplash',
        'Deep clean sink and faucet',
        'Clean inside and outside of microwave',
        'Clean inside oven',
        'Clean inside refrigerator',
        'Degrease stovetop and range hood',
        'Wipe all cabinet fronts and handles',
        'Clean inside cabinets (empty ones)',
        'Sweep and mop floor',
        'Clean baseboards',
        'Wipe light fixtures',
        'Empty and sanitize trash can',
      ],
      Bathroom: [
        'Deep clean and disinfect toilet (incl. base)',
        'Scrub and disinfect shower/tub and grout',
        'Clean sink, faucet, and countertop',
        'Clean and polish mirror',
        'Wipe all cabinet fronts and handles',
        'Clean exhaust fan',
        'Sweep and mop floor',
        'Clean baseboards',
        'Descale fixtures',
        'Replace towels',
        'Empty trash',
      ],
      'Living Room': [
        'Dust all surfaces including shelves',
        'Vacuum carpet or mop floor',
        'Vacuum under furniture',
        'Clean baseboards',
        'Wipe light switches, outlets, and door handles',
        'Dust ceiling fan and light fixtures',
        'Clean window sills and tracks',
        'Dust blinds or curtains',
      ],
      Bedroom: [
        'Change linens and make bed',
        'Dust all surfaces and decor',
        'Vacuum or mop floor',
        'Vacuum under bed',
        'Clean baseboards',
        'Wipe mirrors and glass',
        'Dust light fixtures',
        'Empty trash',
      ],
      Hallway: [
        'Vacuum or mop floor',
        'Clean baseboards',
        'Wipe light switches and door handles',
        'Dust light fixtures',
      ],
    },
  },
  office_commercial: {
    label: 'Office / Commercial Clean',
    rooms: {
      Reception: [
        'Wipe front desk and counters',
        'Dust furniture and decor',
        'Vacuum or mop floor',
        'Empty trash',
        'Clean glass doors and windows',
      ],
      'Office Area': [
        'Wipe desks and workstations',
        'Sanitize keyboards, phones, and mice',
        'Dust monitors and equipment',
        'Vacuum or mop floor',
        'Empty all trash and recycling bins',
        'Wipe light switches and door handles',
      ],
      'Break Room': [
        'Wipe counters and tables',
        'Clean sink and faucet',
        'Clean exterior of appliances',
        'Clean inside microwave',
        'Sweep and mop floor',
        'Empty trash and replace liner',
        'Restock paper towels and soap',
      ],
      Restroom: [
        'Clean and disinfect toilets and urinals',
        'Clean sinks and counters',
        'Clean mirrors',
        'Sweep and mop floor',
        'Restock supplies (paper, soap)',
        'Empty trash',
        'Disinfect door handles',
      ],
      'Conference Room': [
        'Wipe table and chairs',
        'Dust equipment (projector, TV)',
        'Vacuum or mop floor',
        'Empty trash',
        'Clean whiteboard',
      ],
    },
  },
  airbnb: {
    label: 'Airbnb Turnover',
    rooms: {
      Kitchen: [
        'Wash all dishes and put away',
        'Wipe countertops and backsplash',
        'Clean sink and faucet',
        'Clean inside microwave',
        'Wipe exterior of appliances',
        'Check inside fridge and clean',
        'Sweep and mop floor',
        'Empty trash and replace liner',
        'Restock supplies (dish soap, sponge, trash bags)',
      ],
      Bathroom: [
        'Clean and disinfect toilet',
        'Scrub shower/tub',
        'Clean sink and countertop',
        'Clean mirror',
        'Sweep and mop floor',
        'Replace all towels with fresh ones',
        'Restock toiletries (soap, shampoo, toilet paper)',
        'Empty trash',
      ],
      Bedroom: [
        'Strip and remake bed with fresh linens',
        'Dust all surfaces',
        'Vacuum or mop floor',
        'Check under bed and furniture for items',
        'Empty trash',
        'Check closet for guest belongings',
      ],
      'Living Room': [
        'Dust all surfaces',
        'Vacuum or mop floor',
        'Straighten cushions and decor',
        'Wipe remote controls',
        'Check for guest belongings',
        'Wipe light switches and door handles',
      ],
      'Entry / Outdoor': [
        'Sweep entrance',
        'Wipe door handle and lockbox',
        'Check porch/patio area',
        'Ensure exterior lights work',
      ],
    },
  },
  move_in_out: {
    label: 'Move-In / Move-Out',
    rooms: {
      Kitchen: [
        'Clean inside all cabinets and drawers',
        'Clean inside oven and stovetop',
        'Clean inside refrigerator and freezer',
        'Clean inside dishwasher',
        'Clean inside microwave',
        'Wipe countertops and backsplash',
        'Deep clean sink and faucet',
        'Clean range hood and filter',
        'Sweep and mop floor',
        'Clean baseboards',
        'Wipe light fixtures and switches',
      ],
      Bathroom: [
        'Deep clean and disinfect toilet',
        'Scrub shower/tub, tile, and grout',
        'Clean inside medicine cabinet',
        'Clean inside vanity cabinets',
        'Clean sink, faucet, and countertop',
        'Clean mirror',
        'Clean exhaust fan',
        'Sweep and mop floor',
        'Clean baseboards',
        'Descale all fixtures',
      ],
      'All Rooms': [
        'Dust all ceiling fans and light fixtures',
        'Clean all window sills and tracks',
        'Clean inside all closets (shelves, rods, floor)',
        'Wipe all baseboards',
        'Clean all door frames and doors',
        'Wipe all light switches and outlets',
        'Vacuum or mop all floors',
        'Spot clean walls and remove marks',
        'Clean garage floor (if applicable)',
      ],
    },
  },
  post_construction: {
    label: 'Post-Construction',
    rooms: {
      'All Rooms': [
        'Remove construction dust from all surfaces',
        'Vacuum and mop all floors',
        'Clean all window glass inside and out',
        'Clean window sills and tracks',
        'Wipe all light fixtures',
        'Clean all baseboards',
        'Wipe all doors and door frames',
        'Clean all light switches and outlets',
        'Remove stickers and labels from fixtures',
        'Spot clean walls',
      ],
      Kitchen: [
        'Clean inside all cabinets and drawers',
        'Clean all appliances inside and out',
        'Clean countertops and backsplash',
        'Clean sink and faucet',
        'Sweep and mop floor',
      ],
      Bathroom: [
        'Clean and disinfect toilet',
        'Clean shower/tub and tile',
        'Clean sink and countertop',
        'Clean mirror',
        'Clean inside cabinets',
        'Sweep and mop floor',
      ],
      Exterior: [
        'Sweep entrance and walkways',
        'Remove debris from porch/patio',
        'Wipe exterior door and handle',
      ],
    },
  },
};

export default function ChecklistGenerator() {
  const [step, setStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [rooms, setRooms] = useState({});
  const [checkedTasks, setCheckedTasks] = useState({});
  const [companyName, setCompanyName] = useState('');
  const [companyPhone, setCompanyPhone] = useState('');
  const [newRoomName, setNewRoomName] = useState('');
  const [newTaskInputs, setNewTaskInputs] = useState({});

  function handleSelectTemplate(key) {
    const template = TEMPLATES[key];
    setSelectedTemplate(key);
    const roomsCopy = {};
    Object.entries(template.rooms).forEach(([room, tasks]) => {
      roomsCopy[room] = [...tasks];
    });
    setRooms(roomsCopy);
    setCheckedTasks({});
    setNewTaskInputs({});
    setStep(2);
  }

  function toggleTask(room, taskIndex) {
    const key = `${room}::${taskIndex}`;
    setCheckedTasks((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function removeTask(room, taskIndex) {
    setRooms((prev) => {
      const updated = { ...prev };
      updated[room] = updated[room].filter((_, i) => i !== taskIndex);
      if (updated[room].length === 0) {
        delete updated[room];
      }
      return updated;
    });
  }

  function addTask(room) {
    const task = (newTaskInputs[room] || '').trim();
    if (!task) return;
    setRooms((prev) => ({
      ...prev,
      [room]: [...(prev[room] || []), task],
    }));
    setNewTaskInputs((prev) => ({ ...prev, [room]: '' }));
  }

  function removeRoom(room) {
    setRooms((prev) => {
      const updated = { ...prev };
      delete updated[room];
      return updated;
    });
  }

  function addRoom() {
    const name = newRoomName.trim();
    if (!name || rooms[name]) return;
    setRooms((prev) => ({ ...prev, [name]: [] }));
    setNewRoomName('');
  }

  function handlePrint() {
    window.print();
  }

  // Step 1: Choose template
  if (step === 1) {
    return (
      <>
        <div className="tool-form">
          <div className="tool-results-title" style={{ marginBottom: '16px' }}>
            Step 1: Choose a Template
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '12px' }}>
            {Object.entries(TEMPLATES).map(([key, template]) => (
              <button
                key={key}
                type="button"
                className="btn-secondary"
                style={{
                  padding: '16px',
                  textAlign: 'left',
                  cursor: 'pointer',
                }}
                onClick={() => handleSelectTemplate(key)}
              >
                <strong>{template.label}</strong>
                <br />
                <span style={{ fontSize: '13px', opacity: 0.7 }}>
                  {Object.keys(template.rooms).length} rooms, {Object.values(template.rooms).reduce((sum, tasks) => sum + tasks.length, 0)} tasks
                </span>
              </button>
            ))}
          </div>
        </div>
        <StickyTrialBar />
      </>
    );
  }

  // Step 2: Customize rooms & tasks
  if (step === 2) {
    return (
      <>
        <div className="tool-form">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
            <div className="tool-results-title" style={{ margin: 0 }}>
              Step 2: Customize Rooms &amp; Tasks
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button className="btn-secondary" onClick={() => setStep(1)} style={{ fontSize: '13px' }}>
                Back
              </button>
              <button className="btn-primary" onClick={() => setStep(3)} style={{ fontSize: '13px' }}>
                Next: Branding
              </button>
            </div>
          </div>

          {Object.entries(rooms).map(([room, tasks]) => (
            <div key={room} className="tool-results" style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div className="tool-results-title" style={{ margin: 0 }}>{room}</div>
                <button
                  type="button"
                  onClick={() => removeRoom(room)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#ff6b6b',
                    cursor: 'pointer',
                    fontSize: '13px',
                  }}
                >
                  Remove Room
                </button>
              </div>
              {tasks.map((task, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 0' }}>
                  <span style={{ flex: 1, fontSize: '14px' }}>{task}</span>
                  <button
                    type="button"
                    onClick={() => removeTask(room, i)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#ff6b6b',
                      cursor: 'pointer',
                      fontSize: '12px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                <input
                  type="text"
                  className="tool-input"
                  placeholder="Add a custom task..."
                  value={newTaskInputs[room] || ''}
                  onChange={(e) => setNewTaskInputs((prev) => ({ ...prev, [room]: e.target.value }))}
                  onKeyDown={(e) => { if (e.key === 'Enter') addTask(room); }}
                  style={{ flex: 1 }}
                />
                <button className="btn-secondary" onClick={() => addTask(room)} style={{ fontSize: '13px', whiteSpace: 'nowrap' }}>
                  Add Task
                </button>
              </div>
            </div>
          ))}

          <div className="tool-results" style={{ marginTop: '16px' }}>
            <div className="tool-results-title">Add a Custom Room</div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="text"
                className="tool-input"
                placeholder="Room name..."
                value={newRoomName}
                onChange={(e) => setNewRoomName(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') addRoom(); }}
                style={{ flex: 1 }}
              />
              <button className="btn-secondary" onClick={addRoom} style={{ fontSize: '13px', whiteSpace: 'nowrap' }}>
                Add Room
              </button>
            </div>
          </div>
        </div>
        <StickyTrialBar />
      </>
    );
  }

  // Step 3: Branding + Preview
  const totalTasks = Object.values(rooms).reduce((sum, tasks) => sum + tasks.length, 0);

  return (
    <>
      <div className="tool-form">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
          <div className="tool-results-title" style={{ margin: 0 }}>
            Step 3: Branding (Optional)
          </div>
          <button className="btn-secondary" onClick={() => setStep(2)} style={{ fontSize: '13px' }}>
            Back
          </button>
        </div>

        <div className="tool-input-row">
          <div className="tool-input-group">
            <label>Company Name</label>
            <input
              type="text"
              className="tool-input"
              placeholder="Your Cleaning Co."
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div className="tool-input-group">
            <label>Company Phone</label>
            <input
              type="text"
              className="tool-input"
              placeholder="(555) 123-4567"
              value={companyPhone}
              onChange={(e) => setCompanyPhone(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Checklist Preview */}
      <div
        className="tool-results tool-results-animated printable-checklist"
        style={{
          marginTop: '24px',
          backgroundColor: '#fff',
          color: '#1a1a2e',
          padding: '32px',
          borderRadius: '8px',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '24px', borderBottom: '2px solid #1a1a2e', paddingBottom: '16px' }}>
          {companyName && (
            <div style={{ fontSize: '20px', fontWeight: 700, marginBottom: '4px' }}>
              {companyName}
            </div>
          )}
          {companyPhone && (
            <div style={{ fontSize: '14px', opacity: 0.7, marginBottom: '8px' }}>
              {companyPhone}
            </div>
          )}
          <div style={{ fontSize: '18px', fontWeight: 600 }}>
            {TEMPLATES[selectedTemplate]?.label || 'Cleaning'} Checklist
          </div>
          <div style={{ fontSize: '13px', opacity: 0.6, marginTop: '4px' }}>
            {Object.keys(rooms).length} rooms &middot; {totalTasks} tasks
          </div>
        </div>

        {/* Rooms and Tasks */}
        {Object.entries(rooms).map(([room, tasks]) => (
          <div key={room} style={{ marginBottom: '20px' }}>
            <div style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px', borderBottom: '1px solid #e0e0e0', paddingBottom: '4px' }}>
              {room}
            </div>
            {tasks.map((task, i) => {
              const key = `${room}::${i}`;
              const checked = checkedTasks[key] || false;
              return (
                <label
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '4px 0',
                    cursor: 'pointer',
                    fontSize: '14px',
                    textDecoration: checked ? 'line-through' : 'none',
                    opacity: checked ? 0.5 : 1,
                  }}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleTask(room, i)}
                    style={{ width: '16px', height: '16px', accentColor: '#3ECF8E' }}
                  />
                  {task}
                </label>
              );
            })}
          </div>
        ))}

        {/* Footer */}
        <div style={{ textAlign: 'center', marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #e0e0e0', fontSize: '12px', opacity: 0.5 }}>
          Date: ______________ &nbsp;&nbsp; Cleaner: ______________ &nbsp;&nbsp; Signature: ______________
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <EmailGate toolName="checklist-generator">
          <button className="btn-primary" onClick={handlePrint}>
            Print Checklist
          </button>
        </EmailGate>
      </div>

      <ToolGateway
        toolName="checklist-generator"
        headline="Use this checklist on every job with Spotless"
        description="Assign checklists to jobs, track completion in real time, and ensure quality on every clean."
        toolData={serializeToolData('checklist-generator', { template: selectedTemplate, companyName }, null)}
        featureLink="/product/scheduling"
        valueProp={[
          'Attach checklists to specific job types',
          'Cleaners tick off tasks on their phone',
          'Track completion rates and quality scores',
        ]}
      />

      <StickyTrialBar />
    </>
  );
}
