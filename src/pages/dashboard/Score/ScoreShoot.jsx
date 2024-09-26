import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import hitIcon from '../../../assets/icons/hit.png'
import missIcon from '../../../assets/icons/miss.png'
import dragIcon from '../../../assets/icons/drag.png'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const ScoreShoot = () => {

    const users = [
        {
            fullName: 'John Doe'
        },
        {
            fullName: 'Will Smith'
        }
    ]

    const [shooters, setShooters] = useState([])
    const [selectedCase, setSelectedCase] = useState([0, 0])

    /// SETTING INITIAL CASES
    useEffect(() => {
        const shootersArray = users.map(user => {
            const userShoots = []
            for (let i = 0; i < 25; i++) {
                userShoots.push(null)
            }
            return {fullName: user.fullName, shoots: userShoots}
        })
        setShooters(shootersArray)
    }, [])


    /// UPDATING CASES
    const addScore = (result) => {
        // Update Case
        const updatedShooters = [...shooters]
        const shooter = selectedCase[0]
        const shootCase = selectedCase[1]

        updatedShooters[shooter].shoots[shootCase] = result

        setShooters(updatedShooters)

        // Update Selector
        const updatedSelectedCase = [...selectedCase]
        if (shooter < shooters.length - 1) {
            updatedSelectedCase[0] = shooter + 1
        } else if (shootCase < 24) {
            updatedSelectedCase[0] = 0
            updatedSelectedCase[1] = shootCase + 1
        }

        setSelectedCase(updatedSelectedCase)
    }


    /// ADJUSTING SHOOTERS PLACEMENTS
    const onDragEnd = (result) => {
        const { destination, source } = result;
      
        if (!destination) return;
      
        const reorderedShooters = Array.from(shooters);
        const [removed] = reorderedShooters.splice(source.index, 1);
        reorderedShooters.splice(destination.index, 0, removed);
      
        setShooters(reorderedShooters);
    };

  return (
    <div className='dashboard-component'>

        <div className="dashboard-component-headline">
            <h1 className="dashboard-component-headline-title">Example Event</h1>
        </div>

        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable-shooters">
            {(provided) => (
                <div
                className="scoring-sheet"
                {...provided.droppableProps}
                ref={provided.innerRef}
                >
                {shooters.map((shooter, i) => (
                    <Draggable key={i} draggableId={`shooter-${i}`} index={i}>
                    {(provided) => (
                        <div
                        className="shooter-container"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        >
                            <div className="shooter-dragger">
                                <img src={dragIcon} alt="Dragger" />
                            </div>
                            <div className="shooter-content">
                                <div className="shooter-heading">
                                    <h5>{shooter.fullName}</h5>
                                    <h5>{shooter.shoots.filter(item => item === true).length}</h5>
                                </div>
                                <div className="shooter-cases">
                                    {shooter.shoots.map((shoot, index) => (
                                    <div
                                        key={index}
                                        className={`shooter-case ${shoot !== null ? 'active' : ''} ${(selectedCase[0] === i && selectedCase[1] === index) ? 'selected' : ''}`}
                                        onClick={() => setSelectedCase([i, index])}
                                    >
                                        {shoot === true && <img src={hitIcon} alt="Hit" />}
                                        {shoot === false && <img src={missIcon} alt="Miss" />}
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                    </Draggable>
                ))}
                {provided.placeholder}
                </div>
            )}
            </Droppable>
        </DragDropContext>

        <div className="scoring-btns">
            <button className="scoring-miss-btn" onClick={() => addScore(false)}>
                <img src={missIcon} alt="Miss" />
                Miss
            </button>
            <button className="scoring-hit-btn" onClick={() => addScore(true)}>
                <img src={hitIcon} alt="Hit" />
                Hit
            </button>
        </div>
        

    </div>
  )
}

export default ScoreShoot