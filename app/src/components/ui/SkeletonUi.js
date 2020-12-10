import React from 'react'
import { Skeleton, Row, Col } from 'antd';

export const SkeletonUi = () => {
    return (
        <Row>
			<Col span={16} offset={4}>
				<Skeleton type="avatar" size="small" active={true}>
					<Skeleton.Image />
				</Skeleton>
			</Col>
		</Row>
    )
}
