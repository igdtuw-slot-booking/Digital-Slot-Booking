export function sideNav(){
    <Card style={{ width: '10rem', height: '10rem', border: "none" }} className=" d-flex justify-content-space-evenly align-content-center">
                        <Card.Body className='d-flexflex-direction-column align-items-center'>
                            <Card.Text >
                                <Button as="input" type="button" value="Dashboard" variant='side_button' />
                            </Card.Text>
                            <Card.Text>
                                <Button as="input" type="button" value="Book Venue" variant='side_button' />
                            </Card.Text>
                        </Card.Body>
                    </Card>
}
